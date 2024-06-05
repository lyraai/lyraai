// src/app/components/videoPlayer.js
import React from 'react';

export default function VideoPlayer({
  videoUrl,
  title,
  description,
  channel,
  views,
  date,
}) {
  return (
    <div className="max-w-6xl">
      <div className="relative overflow-hidden pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="flex items-center mt-4">
          <img
            className="w-10 h-10 rounded-full"
            src="/channel-avatar.png" // Dummy channel avatar
            alt={channel}
          />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-800">{channel}</p>
            <p className="text-sm text-gray-500">
              {views} views • {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
