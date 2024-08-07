// my-next-app\pages\youtubesummary.js
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import VideoInput from '../src/app/components/videoInput';
import AnimatedBackground from '../src/app/components/background';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getToken');
        const result = await response.json();
        console.log('Fetched data:', result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: '/preview',
      query: {
        videoUrl: encodeURIComponent(videoUrl), // Ensure URL is properly encoded
      },
    });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Head>
        <title>Lyra - Unlock Your Power of Deep Understanding</title>
        <meta
          name="description"
          content="Lyra - Unlock Your Power of Deep Understanding"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative z-10">
        <AnimatedBackground />
        <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
          <div className="w-full max-w-4xl">
            <h1 className="text-6xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-8xl pb-10 font-bold text-left mb-4">
              Unlock Your Power of Deep Understanding
            </h1>
            <VideoInput
              initialUrl={videoUrl}
              fullWidth={true}
              onUrlChange={setVideoUrl}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
