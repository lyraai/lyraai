import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Results() {
  const router = useRouter();
  const { videoUrl, data } = router.query;

  const sections = [
    {
      id: 'concept',
      title: 'Concept',
      content: 'Dummy content for concept section...',
    },
    {
      id: 'discussion',
      title: 'Discussion',
      content: 'Dummy content for discussion section...',
    },
    { id: 'quiz', title: 'Quiz', content: 'Dummy content for quiz section...' },
    {
      id: 'summary',
      title: 'Summary',
      content: 'Dummy content for summary section...',
    },
    {
      id: 'transcript',
      title: 'Transcript',
      content: 'Dummy content for transcript section...',
    },
  ];

  const [currentSection, setCurrentSection] = useState('concept');

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">Video Results</h1>
      <div className="embed-responsive embed-responsive-16by9 mb-4">
        <iframe
          className="embed-responsive-item"
          src={videoUrl}
          allowFullScreen
          style={{ width: '100%', height: '315px' }}
        ></iframe>
      </div>
      <div className="flex space-x-4 mb-8">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`px-4 py-2 rounded ${currentSection === section.id ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setCurrentSection(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        {sections.find((section) => section.id === currentSection).content}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-full shadow"
        onClick={() => router.push('/')}
      >
        Back to Home
      </button>
    </div>
  );
}
