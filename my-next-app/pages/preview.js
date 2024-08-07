// my-next-app\pages\preview.js
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
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    const processVideo = async () => {
      try {
        const response = await fetch('/api/getToken');
        const result = await response.json();
        const idToken = result.idToken; // Ensure this line is correct and idToken is fetched properly

        const videoResponse = await fetch(
          'https://flask-hello-world-ys6elaj32q-an.a.run.app/youtube_process',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${idToken}`, // Ensure the token is correctly attached
            },
            body: JSON.stringify({
              url: decodeURIComponent(videoUrl), // Ensure URL is properly decoded
              audio_dir: '/tmp', // Adjust this as needed
              audio_type: 'mp3', // or the appropriate audio type
            }),
          },
        );

        const videoResult = await videoResponse.json();
        setLoading(false);
        router.push({
          pathname: '/results',
          query: {
            videoUrl,
            data: JSON.stringify(videoResult.results),
          },
        });
      } catch (error) {
        console.error('Error processing video:', error);
      }
    };

    processVideo();

    return () => clearInterval(timer);
  }, [router, videoUrl]);

  // Function to format seconds into MM:SS format
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Function to handle the test button click
  const handleTestButtonClick = () => {
    setLoading(false);
    router.push({
      pathname: '/results',
      query: {
        videoUrl,
        data: JSON.stringify({
          /* Your mock data here */
        }),
      },
    });
  };

  const handleUrlChange = (newUrl) => {
    // 可以在这里处理新的 URL，或者触发其他逻辑
    console.log('New video URL:', newUrl);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <VideoInput initialUrl={videoUrl} onUrlChange={handleUrlChange} />
      {loading ? (
        <div>
          <p>Relax... It may take a while...</p>
          <p>Analyzing......</p>
          <p>Generating....... </p>
          <p>{formatTime(seconds)}</p>
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
