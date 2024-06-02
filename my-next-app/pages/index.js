import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../src/app/components/navBar';
import VideoInput from '../src/app/components/videoInput';

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
        videoUrl,
      },
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Lyra - Unlock Your Power of Deep Understanding</title>
        <meta
          name="description"
          content="Lyra - Unlock Your Power of Deep Understanding"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen pt-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        <div className="w-full max-w-4xl">
          <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-9xl pb-10 font-bold text-left mb-4">
            Unlock Your Power of Deep Understanding
          </h1>
          <VideoInput initialUrl={videoUrl} fullWidth={true} />
        </div>
      </main>
    </div>
  );
}
