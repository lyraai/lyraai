// // src/app/components/videoPlayer.js
// import React from 'react';

// export default function VideoPlayer({
//   videoUrl,
//   title,
//   description,
//   channel,
//   views,
//   date,
// }) {
//   return (
//     <div className="max-w-6xl">
//       <div className="relative overflow-hidden pb-[56.25%] h-0">
//         <iframe
//           className="absolute top-0 left-0 w-full h-full"
//           src={videoUrl}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>
//       <div className="mt-4">
//         <h1 className="text-2xl font-bold">{title}</h1>
//         <p className="mt-2 text-gray-600">{description}</p>
//         <div className="flex items-center mt-4">
//           <img
//             className="w-10 h-10 rounded-full"
//             src="/channel-avatar.png" // Dummy channel avatar
//             alt={channel}
//           />
//           <div className="ml-4">
//             <p className="text-sm font-medium text-gray-800">{channel}</p>
//             <p className="text-sm text-gray-500">
//               {views} views • {date}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// src/app/components/videoPlayer.js
import React from 'react';
import YouTube from 'react-youtube';

export default function VideoPlayer({
  videoUrl,
  title,
  description,
  channel,
  views,
  date,
}) {
  const getYouTubeVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="max-w-6xl">
      {videoId ? (
        <div className="relative overflow-hidden pb-[56.25%] h-0">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      ) : (
        <p>Invalid YouTube URL</p>
      )}
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
