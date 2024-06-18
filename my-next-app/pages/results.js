// // pages/results.js
// import { useRouter } from 'next/router';
// import VideoInput from '../src/app/components/videoInput';
// import VideoPlayer from '../src/app/components/videoPlayer';
// import ChapterList from '../src/app/components/chapterList';
// import { useEffect, useState } from 'react';

// // 导入 Material UI 图标
// import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
// import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
// import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
// import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';

// export default function Results() {
//   const router = useRouter();
//   const { videoUrl } = router.query;
//   const [chapters, setChapters] = useState([]);
//   const [transcript, setTranscript] = useState([]);
//   const [view, setView] = useState('transcript'); // 默认显示 transcript

//   useEffect(() => {
//     // 模拟获取章节和 transcript 数据
//     setChapters([
//       {
//         thumbnail: '/public/dummy/chapter1.png',
//         title: 'Introduction example',
//         timestamp: '0:00',
//       },
//       {
//         thumbnail: '/chapter2.png',
//         title: 'Series preview',
//         timestamp: '1:07',
//       },
//       {
//         thumbnail: '/chapter3.png',
//         title: 'What are neurons?',
//         timestamp: '2:42',
//       },
//       {
//         thumbnail: '/chapter4.png',
//         title: 'Introducing layers',
//         timestamp: '3:35',
//       },
//       {
//         thumbnail: '/chapter5.png',
//         title: 'Why layers',
//         timestamp: '5:31',
//       },
//       {
//         thumbnail: '/chapter6.png',
//         title: 'Edge detection example',
//         timestamp: '8:38',
//       },
//     ]);

//     setTranscript([
//       {
//         time: '00:01:33',
//         text: 'This video is just going to be devoted to the structure component...',
//       },
//       {
//         time: '00:01:49',
//         text: 'This is a somewhat classic example for introducing the topic...',
//       },
//       {
//         time: '00:02:05',
//         text: 'There are many, many variants of neural networks...',
//       },
//       // ... 更多的 transcript 数据
//     ]);
//   }, []);

//   const toggleView = (newView) => {
//     setView(newView);
//   };

//   return (
//     <div className="min-h-screen bg-white py-0 px-8 sm:px-8 md:px-8 lg:px-8 xl:px-12">
//       <VideoInput initialUrl={videoUrl} />
//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-1">
//         <div className="col-span-2">
//           <VideoPlayer
//             videoUrl={videoUrl}
//             title="Blender Tutorial for Complete Beginners - Part 1"
//             description="This is the start of Blender tutorial series for complete beginners..."
//             channel="Blender Guru"
//             views="2.9M"
//             date="6 months ago"
//           />
//           <div className="w-full mt-4">
//             <ChapterList chapters={chapters} />
//           </div>
//         </div>
//         <div className="max-w-[508px] md:pl-4 py-2 px-2 bg-gray-50 rounded-3xl ">
//           <div className="mb-4 p-1 flex space-x-2rounded-full">
//             <button
//               onClick={() => toggleView('summary')}
//               className={`w-25% p-2 grow items-center justify-center rounded-full ${view === 'summary' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
//             >
//               <DescriptionRoundedIcon className="" /> Summary
//             </button>
//             <button
//               onClick={() => toggleView('transcript')}
//               className={`w-25% px-2 py-2 grow items-center justify-center rounded-full ${view === 'transcript' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
//             >
//               <ForumRoundedIcon className="" /> Transcript
//             </button>
//             <button
//               onClick={() => toggleView('quiz')}
//               className={`w-25% px-2 py-2 grow items-center justify-center rounded-full ${view === 'quiz' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
//             >
//               <QuizRoundedIcon className="" /> Quiz
//             </button>
//             <button
//               onClick={() => toggleView('discussion')}
//               className={`w-25% px-2 py-2 grow items-center justify-center rounded-full ${view === 'discussion' ? 'bg-teal-500 text-white' : 'bg-transparent text-gray-400'}`}
//             >
//               <SummarizeRoundedIcon className="" /> Discussion
//             </button>
//           </div>
//           <div className="px-2">
//             {view === 'transcript' && (
//               <div>
//                 <h2 className="text-xl font-bold mb-4">Transcript</h2>
//                 <div className="overflow-y-auto max-h-96">
//                   {transcript.map((entry, index) => (
//                     <div key={index} className="mb-4">
//                       <p className="text-blue-500">{entry.time}</p>
//                       <p>{entry.text}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//             {view === 'discussion' && (
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">Discussion</h2>
//                 {/* 在这里添加 discussion 内容 */}
//               </div>
//             )}
//             {view === 'quiz' && (
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">Quiz</h2>
//                 {/* 在这里添加 quiz 内容 */}
//               </div>
//             )}
//             {view === 'summary' && (
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">Summary</h2>
//                 {/* 在这里添加 summary 内容 */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const parsedData = JSON.parse(data);

    setChapters(parsedData.segments);
    setTranscript(parsedData.transcript);
  }, [data]);

  const toggleView = (newView) => {
    setView(newView);
  };

  return (
    <div className="min-h-screen bg-white py-0 px-8 sm:px-8 md:px-8 lg:px-8 xl:px-12">
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
    </div>
  );
}
