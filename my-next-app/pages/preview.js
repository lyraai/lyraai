import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Preview() {
  const router = useRouter();
  const { videoUrl, data } = router.query;
  const [transcript, setTranscript] = useState([]);
  const [summary, setSummary] = useState('');
  const [keyConcepts, setKeyConcepts] = useState('');
  const [quiz, setQuiz] = useState('');

  useEffect(() => {
    if (data) {
      const parsedData = JSON.parse(data);
      setTranscript(parsedData.transcript);
      setSummary(parsedData.summary);
      setKeyConcepts(parsedData.keyConcepts);
      setQuiz(parsedData.quiz);
    }
  }, [data]);

  const handleClick = (time) => {
    window.seekTo(time);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col items-center justify-center min-h-screen pt-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          Video Preview and Transcript
        </h1>
        <div className="w-full flex">
          <div className="flex-1">
            {videoUrl && (
              <iframe
                id="videoPlayer"
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${new URLSearchParams(
                  new URL(videoUrl).search
                ).get('v')}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="flex-1 ml-4">
            <div className="transcript">
              <h2 className="text-2xl font-semibold">Transcript</h2>
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                {transcript.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => handleClick(item.time)}
                    className="cursor-pointer text-blue-500"
                  >
                    {item.text}{' '}
                  </span>
                ))}
              </div>
            </div>
            <div className="summary mt-4">
              <h2 className="text-2xl font-semibold">Summary</h2>
              <p>{summary}</p>
            </div>
            <div className="keyConcepts mt-4">
              <h2 className="text-2xl font-semibold">Key Concepts</h2>
              <p>{keyConcepts}</p>
            </div>
            <div className="quiz mt-4">
              <h2 className="text-2xl font-semibold">Quiz Questions</h2>
              <p>{quiz}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
