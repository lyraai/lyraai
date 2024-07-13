// my-next-app\pages\results.js
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import VideoInput from '../src/app/components/videoInput';
import VideoPlayer from '../src/app/components/videoPlayer';

import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';

export default function Results() {
  const router = useRouter();
  const { videoUrl } = router.query;
  const [transcript, setTranscript] = useState([]);
  const [view, setView] = useState('summary');
  const [videoInfo, setVideoInfo] = useState(null);
  const playerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState('');
  const [summary, setSummary] = useState('');
  const [discussion, setDiscussion] = useState([]);
  const [quiz, setQuiz] = useState([]);

  const [keyMoments, setKeyMoments] = useState([]);

  const YOUTUBE_API_KEY = 'AIzaSyDEvBAc2dEd55NMu6mC40JPihhByycvCmQ';

  useEffect(() => {
    if (videoUrl) {
      const videoId = extractVideoId(videoUrl);
      fetchVideoInfo(videoId);
      fetchTranscript(videoId);
    }
  }, [videoUrl]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  };

  const fetchVideoInfo = async (videoId) => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet,statistics`
      );
      const videoData = response.data.items[0];
      const channelId = videoData.snippet.channelId;
      const channelResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${YOUTUBE_API_KEY}&part=snippet`
      );
      const channelData = channelResponse.data.items[0];

      setVideoInfo({
        title: videoData.snippet.title,
        description: videoData.snippet.description,
        channel: videoData.snippet.channelTitle,
        views: videoData.statistics.viewCount,
        date: videoData.snippet.publishedAt,
        channelThumbnail: channelData.snippet.thumbnails.default.url, // 添加频道头像 URL
      });
    } catch (error) {
      console.error('Failed to fetch video info:', error);
      setError('Failed to fetch video info');
    } finally {
      setLoading(false);
    }
  };

  const fetchTranscript = async (videoId) => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.post('/api/youtubeProcess', {
        url: `https://www.youtube.com/watch?v=${videoId}`,
        audio_dir: '/tmp',
        audio_type: 'mp3',
      });

      const result = response.data.results;
      setTranscript(result.transcript || []);
      setKeyMoments(result.key_moments || []);
      setSummary(result.summary || '');
      setDiscussion(Object.values(result.discussion || []));
      setQuiz(Object.values(result.quiz || []));
    } catch (error) {
      console.error('Failed to fetch transcript:', error);
      setError('Failed to fetch transcript');
    } finally {
      setLoading(false);
    }
  };

  const handleUrlChange = (newUrl) => {
    console.log('New video URL:', newUrl);
  };

  const toggleView = (newView) => {
    setView(newView);
  };

  const handleTimestampClick = (timestamp) => {
    const timeInSeconds = timestamp
      .split(':')
      .reduce((acc, time) => 60 * acc + +time, 0);
    console.log(`跳转到 ${timeInSeconds} 秒`);
    if (playerRef.current) {
      playerRef.current.seekTo(timeInSeconds);
    }
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white py-0 px-8 sm:px-8 md:px-8 lg:px-8 xl:px-12">
      <VideoInput initialUrl={videoUrl} onUrlChange={handleUrlChange} />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-1">
        <div className="col-span-2">
          {videoInfo && (
            <VideoPlayer
              ref={playerRef}
              videoUrl={videoUrl}
              title={videoInfo.title}
              description={videoInfo.description}
              channel={videoInfo.channel}
              views={videoInfo.views}
              date={new Date(videoInfo.date).toLocaleDateString()}
              channelThumbnail={videoInfo.channelThumbnail} // 传递频道头像 URL
            />
          )}
        </div>
        <div className="max-w-[508px] md:pl-4 py-2 px-2 bg-gray-50 rounded-3xl">
          <div className="mb-4 p-1 flex space-x-2 rounded-full">
            <button
              onClick={() => toggleView('summary')}
              className={`w-25% p-2 grow items-center justify-center rounded-full ${view === 'summary' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
            >
              <DescriptionRoundedIcon /> Summary
            </button>
            <button
              onClick={() => toggleView('transcript')}
              className={`w-25% px-2 py-2 grow items-center justify-center rounded-full ${view === 'transcript' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
            >
              <ForumRoundedIcon /> Transcript
            </button>
            <button
              onClick={() => toggleView('quiz')}
              className={`w-25% px-2 py-2 grow items-center justify-center rounded-full ${view === 'quiz' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
            >
              <QuizRoundedIcon /> Quiz
            </button>
            <button
              onClick={() => toggleView('discussion')}
              className={`w-25% px-2 py-2 grow items-center justify-center rounded-full ${view === 'discussion' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
            >
              <SummarizeRoundedIcon /> Discussion
            </button>
          </div>
          <div className="px-2">
            {loading ? (
              <div>
                <p>Relax... It may take a while...</p>
                <p>Analyzing......</p>
                <p>Generating....... </p>
                <p>{formatTime(seconds)}</p>
              </div>
            ) : (
              <>
                {view === 'transcript' && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Transcript</h2>
                    <div className="overflow-y-auto max-h-96">
                      {Array.isArray(transcript) && transcript.length > 0 ? (
                        transcript.map((entry, index) => (
                          <div key={index} className="mb-4">
                            <p
                              className="text-blue-500 cursor-pointer"
                              onClick={() => handleTimestampClick(entry.time)}
                            >
                              {entry.time}
                            </p>
                            <p>{entry.text}</p>
                          </div>
                        ))
                      ) : (
                        <p>No transcript available.</p>
                      )}
                    </div>
                  </div>
                )}
                {view === 'discussion' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Discussion</h2>
                    {discussion.length > 0 ? (
                      discussion.map((item, index) => (
                        <div key={index} className="mb-4">
                          <p className="font-semibold">Q: {item.question}</p>
                          <p className="text-gray-700">A: {item.answer}</p>
                        </div>
                      ))
                    ) : (
                      <p>No discussion available.</p>
                    )}
                  </div>
                )}
                {view === 'quiz' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Quiz</h2>
                    {quiz.length > 0 ? (
                      quiz.map((item, index) => (
                        <div key={index} className="mb-4">
                          <p className="font-semibold">Q: {item.question}</p>
                          <ul className="list-disc pl-5">
                            {item.options.map((option, optionIndex) => (
                              <li key={optionIndex}>{option}</li>
                            ))}
                          </ul>
                          <p className="text-gray-700">Answer: {item.answer}</p>
                        </div>
                      ))
                    ) : (
                      <p>No quiz available.</p>
                    )}
                  </div>
                )}
                {view === 'summary' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Summary</h2>
                    <p>{summary}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/* 添加独立的 Key Moments 部分 */}
      <div className="w-full mt-4 px-8">
        <h2 className="text-xl font-bold mb-4">Key Moments</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {keyMoments.length > 0 ? (
            keyMoments.map((moment, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg p-4 cursor-pointer"
                onClick={() => handleTimestampClick(moment.time)}
              >
                <img
                  src={moment.thumbnail}
                  alt={moment.title}
                  className="w-32 h-18 rounded-lg mb-2"
                />
                <p className="text-lg font-semibold">{moment.title}</p>
                <p className="text-blue-500">{moment.time}</p>
              </div>
            ))
          ) : (
            <p>No key moments available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
