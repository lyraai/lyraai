import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Preview() {
  const router = useRouter();
  const { videoUrl } = router.query;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate video processing
    setTimeout(() => {
      setLoading(false);
      router.push({
        pathname: '/results',
        query: {
          videoUrl,
          data: JSON.stringify({ message: 'Video processed successfully' }),
        },
      });
    }, 3000); // simulate 3 seconds of processing time
  }, [router, videoUrl]);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">Video Preview</h1>
      {loading ? (
        <div>
          <p>Relax... It may take a while...</p>
          <p>Analysing......</p>
          <p>Generating....... </p>
          <p>00:00:02</p>
        </div>
      ) : (
        <div className="embed-responsive embed-responsive-16by9 mb-4">
          <iframe
            className="embed-responsive-item"
            src={videoUrl}
            allowFullScreen
            style={{ width: '100%', height: '315px' }}
          ></iframe>
        </div>
      )}
    </div>
  );
}
