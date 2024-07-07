import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import VideoInput from '../src/app/components/videoInput';
import VideoPlayer from '../src/app/components/videoPlayer';
import ChapterList from '../src/app/components/chapterList';

// Material UI Icons
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';

export default function Results() {
  const router = useRouter();
  const { videoUrl, data } = router.query;
  const [chapters, setChapters] = useState([]);
  const [transcript, setTranscript] = useState([]);
  const [view, setView] = useState('transcript');
  const [videoInfo, setVideoInfo] = useState(null);
  const playerRef = useRef(null);

  // 独立设置假数据来测试 Key Moments
  const [keyMoments, setKeyMoments] = useState([
    {
      time: '00:01',
      title: 'Introduction',
      thumbnail: 'https://via.placeholder.com/150',
    },
    {
      time: '00:10',
      title: 'Chapter 1',
      thumbnail: 'https://via.placeholder.com/150',
    },
    {
      time: '00:20',
      title: 'Chapter 2',
      thumbnail: 'https://via.placeholder.com/150',
    },
    {
      time: '00:30',
      title: 'Conclusion',
      thumbnail: 'https://via.placeholder.com/150',
    },
  ]);

  const YOUTUBE_API_KEY = 'AIzaSyDEvBAc2dEd55NMu6mC40JPihhByycvCmQ'; // 替换为你的 YouTube API 密钥

  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setChapters(parsedData.segments || []);
        setTranscript(parsedData.transcript || []);
      } catch (error) {
        console.error('Failed to parse data:', error);
      }
    }
  }, [data]);

  useEffect(() => {
    if (videoUrl) {
      const videoId = extractVideoId(videoUrl);
      fetchVideoInfo(videoId);
    }
  }, [videoUrl]);

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  };

  const fetchVideoInfo = async (videoId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet,statistics`,
      );
      const videoData = response.data.items[0];
      const channelId = videoData.snippet.channelId;
      const channelResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${YOUTUBE_API_KEY}&part=snippet`,
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
    }
  };

  const handleUrlChange = (newUrl) => {
    // 可以在这里处理新的 URL，或者触发其他逻辑
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
          <div className="w-full mt-4">
            <ChapterList chapters={chapters} />
          </div>
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
            {view === 'transcript' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Transcript</h2>
                <div className="overflow-y-auto max-h-96">
                  {transcript.length > 0 ? (
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
                {/* Add discussion content here */}
              </div>
            )}
            {view === 'quiz' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Quiz</h2>
                {/* Add quiz content here */}
              </div>
            )}
            {view === 'summary' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Summary</h2>
                {/* Add summary content here */}
              </div>
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
