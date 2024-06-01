import Head from 'next/head';
import SignUpButton from '../src/app/components/signUpButton';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // 模拟处理视频的 API 请求
    setTimeout(() => {
      setLoading(false);
      router.push({
        pathname: '/preview',
        query: { videoUrl, data: 'Sample Data' },
      });
    }, 2000);
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
      <main className="flex flex-col items-center justify-center min-h-screen pt-16 px-4 ml-5">
        <h1 className="text-6xl font-bold text-center mb-4">
          Unlock Your Power of Deep Understanding
        </h1>
        <div className="flex justify-center w-full mb-8">
          <input
            type="text"
            placeholder="Input the URL of YouTube video"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-2/3 p-3 pl-5 bg-gray-100 rounded-full shadow-sm focus:outline-none"
          />
          <button
            onClick={handleSubmit}
            className="ml-2 px-4 py-2 bg-teal-500 text-white rounded-full shadow"
          >
            Go
          </button>
        </div>
        {loading && (
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col items-center">
              <p className="mt-4">Loading...</p>
            </div>
          </div>
        )}
        <SignUpButton />
      </main>
    </div>
  );
}
