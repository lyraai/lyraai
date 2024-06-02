// src/app/components/videoInput.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import GoButton from './goButton';

export default function VideoInput({ initialUrl, fullWidth }) {
  const [videoUrl, setVideoUrl] = useState(initialUrl || '');
  const router = useRouter();
  const isValidUrl = (url) => {
    const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidUrl(videoUrl)) {
      router.push({
        pathname: '/preview',
        query: {
          videoUrl,
        },
      });
    }
  };

  return (
    <div
      className={`flex items-center space-x-4 ${fullWidth ? 'w-full' : 'w-[500px]'} mb-8`}
    >
      <button className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-full">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14m7-7H5"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Input the URL of YouTube video~"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="flex-grow p-3 pl-5 bg-gray-100 rounded-full shadow-sm focus:outline-none h-10"
      />
      <GoButton onClick={handleSubmit} isDisabled={!isValidUrl(videoUrl)} />
    </div>
  );
}
