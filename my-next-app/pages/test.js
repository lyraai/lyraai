// my-next-app\pages\test.js
import { useState } from 'react';

export default function Test() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [responses, setResponses] = useState({});

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
      setResponses((prev) => ({ ...prev, extractId: result }));
    } catch (err) {
      setError(`Error extracting video ID: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleTestRoute = async (route, body = {}) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(route, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.statusText} - ${errorText}`);
      }

      const result = await response.json();
      setResponses((prev) => ({ ...prev, [route]: result }));
    } catch (err) {
      setError(`Error testing route ${route}: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div>
        <label
          htmlFor="videoUrl"
          className="block text-sm font-medium text-gray-700"
        >
          YouTube Video URL
        </label>
        <input
          type="text"
          name="videoUrl"
          id="videoUrl"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
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
      <h2 className="text-2xl font-bold mt-8">Test Other Routes</h2>
      <button
        onClick={() =>
          handleTestRoute('/api/downloadAudio', {
            url: videoUrl,
            filename: 'test.mp3',
            audio_type: 'mp3',
          })
        }
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        disabled={loading}
      >
        {loading ? 'Testing...' : 'Test Download Audio'}
      </button>
      <button
        onClick={() =>
          handleTestRoute('/api/youtubeProcess', {
            url: videoUrl,
            audio_dir: '/tmp',
            audio_type: 'mp3',
          })
        }
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        disabled={loading}
      >
        {loading ? 'Testing...' : 'Test YouTube Process'}
      </button>
      {Object.keys(responses).map((route) => (
        <div key={route} className="mt-4">
          <h3 className="text-xl font-bold">{route}</h3>
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(responses[route], null, 2)}
          </pre>
        </div>
      ))}
    </div>
  );
}
