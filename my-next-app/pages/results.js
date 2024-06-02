import { useRouter } from 'next/router';
import VideoInput from '../src/app/components/videoInput';
import VideoPlayer from '../src/app/components/videoPlayer';
import ChapterList from '../src/app/components/chapterList';
import { useEffect, useState } from 'react';

export default function Results() {
  const router = useRouter();
  const { videoUrl } = router.query;
  const [chapters, setChapters] = useState([]);
  const [transcript, setTranscript] = useState([]);
  const [view, setView] = useState('transcript'); // 默认显示 transcript

  useEffect(() => {
    // 模拟获取章节和 transcript 数据
    setChapters([
      {
        thumbnail: '/chapter1.png',
        title: 'Introduction example',
        timestamp: '0:00',
      },
      {
        thumbnail: '/chapter2.png',
        title: 'Series preview',
        timestamp: '1:07',
      },
      {
        thumbnail: '/chapter3.png',
        title: 'What are neurons?',
        timestamp: '2:42',
      },
      {
        thumbnail: '/chapter4.png',
        title: 'Introducing layers',
        timestamp: '3:35',
      },
      {
        thumbnail: '/chapter5.png',
        title: 'Why layers',
        timestamp: '5:31',
      },
      {
        thumbnail: '/chapter6.png',
        title: 'Edge detection example',
        timestamp: '8:38',
      },
    ]);

    setTranscript([
      {
        time: '00:01:33',
        text: 'This video is just going to be devoted to the structure component...',
      },
      {
        time: '00:01:49',
        text: 'This is a somewhat classic example for introducing the topic...',
      },
      {
        time: '00:02:05',
        text: 'There are many, many variants of neural networks...',
      },
      // ... 更多的 transcript 数据
    ]);
  }, []);

  const toggleView = (newView) => {
    setView(newView);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <VideoInput initialUrl={videoUrl} />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <VideoPlayer
            videoUrl={videoUrl}
            title="Blender Tutorial for Complete Beginners - Part 1"
            description="This is the start of Blender tutorial series for complete beginners..."
            channel="Blender Guru"
            views="2.9M"
            date="6 months ago"
          />
          <div className="mt-4">
            <ChapterList chapters={chapters} />
          </div>
        </div>
        <div className="md:w-1/3 md:pl-8">
          <div className="flex justify-between items-center">
            <button
              onClick={() => toggleView('transcript')}
              className={`px-4 py-2 ${view === 'transcript' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
            >
              Transcript
            </button>
            <button
              onClick={() => toggleView('discussion')}
              className={`px-4 py-2 ${view === 'discussion' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
            >
              Discussion
            </button>
            <button
              onClick={() => toggleView('quiz')}
              className={`px-4 py-2 ${view === 'quiz' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
            >
              Quiz
            </button>
            <button
              onClick={() => toggleView('summary')}
              className={`px-4 py-2 ${view === 'summary' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
            >
              Summary
            </button>
          </div>
          {view === 'transcript' && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Transcript</h2>
              <div className="overflow-y-auto max-h-96">
                {transcript.map((entry, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-blue-500">{entry.time}</p>
                    <p>{entry.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {view === 'discussion' && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Discussion</h2>
              {/* 在这里添加 discussion 内容 */}
            </div>
          )}
          {view === 'quiz' && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Quiz</h2>
              {/* 在这里添加 quiz 内容 */}
            </div>
          )}
          {view === 'summary' && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Summary</h2>
              {/* 在这里添加 summary 内容 */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
