import { useRouter } from 'next/router';
import VideoInput from '../src/app/components/videoInput';
import VideoPlayer from '../src/app/components/videoPlayer';
import ChapterList from '../src/app/components/chapterList';
import { useEffect, useState } from 'react';

// 导入Material UI图标
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';

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
        thumbnail: '/public/dummy/chapter1.png',
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
    <div className="min-h-screen bg-white py-0 lg:px-48 xl:px-96">
      <VideoInput initialUrl={videoUrl} />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-1">
        <div className="col-span-2">
          <VideoPlayer
            videoUrl={videoUrl}
            title="Blender Tutorial for Complete Beginners - Part 1"
            description="This is the start of Blender tutorial series for complete beginners..."
            channel="Blender Guru"
            views="2.9M"
            date="6 months ago"
          />
          <div className="w-full mt-4">
            <ChapterList chapters={chapters} />
          </div>
        </div>
        <div className="min-w-[600px] md:pl-8 ">
          <div className="flex mb-4 p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => toggleView('summary')}
              className={`px-1 py-2 grow jusitfy-between items-center rounded-full ${view === 'summary' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
            >
              <DescriptionRoundedIcon className="mr-2" /> Summary
            </button>
            <button
              onClick={() => toggleView('transcript')}
              className={`px-1 py-2 grow jusitfy-between items-center rounded-full ${view === 'transcript' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
            >
              <ForumRoundedIcon className="mr-2" /> Transcript
            </button>
            <button
              onClick={() => toggleView('quiz')}
              className={`px-1 py-2 grow jusitfy-between items-center rounded-full ${view === 'quiz' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
            >
              <QuizRoundedIcon className="mr-2" /> Quiz
            </button>
            <button
              onClick={() => toggleView('discussion')}
              className={`px-1 py-2 grow jusitfy-between items-center rounded-full ${view === 'discussion' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
            >
              <SummarizeRoundedIcon className="mr-2" /> Discussion
            </button>
          </div>
          <div className="mt-4">
            {view === 'transcript' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Transcript</h2>
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
              <div>
                <h2 className="text-xl font-semibold mb-4">Discussion</h2>
                {/* 在这里添加 discussion 内容 */}
              </div>
            )}
            {view === 'quiz' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Quiz</h2>
                {/* 在这里添加 quiz 内容 */}
              </div>
            )}
            {view === 'summary' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Summary</h2>
                {/* 在这里添加 summary 内容 */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
