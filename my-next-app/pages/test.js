import { useRouter } from 'next/router';
import { useState } from 'react';
import VideoInput from '../src/app/components/videoInput';

export default function Test() {
  const router = useRouter();
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleExtractId = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/extractId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.statusText} - ${errorText}`);
      }

      const result = await response.json();
      setVideoId(result.video_id);
    } catch (err) {
      setError(`Error extracting video ID: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <VideoInput initialUrl={videoUrl} onUrlChange={setVideoUrl} />
      <h1 className="text-4xl font-bold mb-4">Test Extract YouTube ID</h1>
      <button
        onClick={handleExtractId}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        disabled={loading}
      >
        {loading ? 'Extracting...' : 'Extract Video ID'}
      </button>
      {videoId && (
        <div className="mt-4">
          <p className="text-xl">Extracted Video ID: {videoId}</p>
        </div>
      )}
      {error && (
        <div className="mt-4">
          <p className="text-xl text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
}
