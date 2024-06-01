import Head from 'next/head';
import SignUpButton from '../src/app/components/signUpButton';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch('/api/processVideo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ videoUrl }),
    });
    const data = await response.json();

    if (data.error) {
      alert('Error processing video');
      setLoading(false);
    } else {
      router.push({
        pathname: '/preview',
        query: { videoUrl, data: JSON.stringify(data) },
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Head>
        <title>Lyra - Unlock Your Power of Deep Understanding</title>
        <meta
          name="description"
          content="Lyra - Unlock Your Power of Deep Understanding"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between items-center p-4 w-full max-w-5xl mx-auto">
        <div className="text-xl font-bold">Lyra</div>
        <nav className="flex space-x-4">
          <a href="/" className="text-lg">
            Home
          </a>
          <a href="/products" className="text-lg">
            Products
          </a>
          <a href="/pricing" className="text-lg">
            Pricing
          </a>
          <a href="/about" className="text-lg">
            About us
          </a>
          <a
            href="/signup"
            className="px-4 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition"
          >
            Sign up
          </a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-5xl mx-auto p-4">
        <h1 className="text-6xl font-bold text-center mb-8">
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
              <div
                id="videoPlayer"
                style={{ width: '100%', height: '315px' }}
              ></div>
              <p className="mt-4">Loading...</p>
            </div>
          </div>
        )}
        <SignUpButton />
        {data && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">API Response:</h2>
            <pre className="bg-gray-100 p-4 rounded-lg shadow-sm">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
