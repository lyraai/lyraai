import { useRouter } from 'next/router';

export default function Preview() {
  const router = useRouter();
  const { videoUrl, data } = router.query;

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">Video Preview</h1>
      <div className="mb-4">
        <strong>Video URL:</strong> {videoUrl}
      </div>
      <div>
        <strong>Data:</strong> {data}
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="embed-responsive embed-responsive-16by9 mb-4">
          <iframe
            className="embed-responsive-item"
            src={videoUrl}
            allowFullScreen
            style={{ width: '100%', height: '315px' }}
          ></iframe>
        </div>
        <button
          className="px-4 py-2 bg-teal-500 text-white rounded-full shadow "
          onClick={() => router.push('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
