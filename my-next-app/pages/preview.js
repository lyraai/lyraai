import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import VideoInput from '../src/app/components/videoInput';
import VideoPlayer from '../src/app/components/videoPlayer';

export default function Preview() {
  const router = useRouter();
  const { videoUrl } = router.query;
  const [loading, setLoading] = useState(true);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Simulate video processing
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    setTimeout(() => {
      setLoading(false);
      router.push({
        pathname: '/results',
        query: {
          videoUrl,
          data: JSON.stringify({ message: 'Video processed successfully!' }),
        },
      });
    }, 5000); // simulate 3 seconds of processing time

    return () => clearInterval(timer);
  }, [router, videoUrl]);

  return (
    <div className="min-h-screen bg-white p-8">
      <VideoInput initialUrl={videoUrl} />
      <h1 className="text-4xl font-bold mb-4">Video Preview</h1>
      {loading ? (
        <div>
          <p>Relax... It may take a while...</p>
          <p>Analysing......</p>
          <p>Generating....... </p>
          <p>{`00:${seconds.toString().padStart(2, '0')}`}</p>
        </div>
      ) : (
        <VideoPlayer
          videoUrl={videoUrl}
          title="Blender Tutorial for Complete Beginners - Part 1"
          description="This is the start of Blender tutorial series for complete beginners..."
          channel="Blender Guru"
          views="2.9M"
          date="6 months ago"
        />
      )}
    </div>
  );
}
