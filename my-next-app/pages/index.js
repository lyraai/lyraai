// import Head from 'next/head';
// import SignUpButton from '../src/app/components/signUpButton';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// export default function Home() {
//   const [videoUrl, setVideoUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('/api/getToken');
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     const response = await fetch('/api/processVideo', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ videoUrl }),
//     });
//     const data = await response.json();

//     if (data.error) {
//       alert('Error processing video');
//       setLoading(false);
//     } else {
//       // Assuming that you will save the data to some state or context
//       // and navigate to the preview page
//       router.push({
//         pathname: '/preview',
//         query: { videoUrl, data: JSON.stringify(data) },
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Head>
//         <title>Lyra - Unlock Your Power of Deep Understanding</title>
//         <meta
//           name="description"
//           content="Lyra - Unlock Your Power of Deep Understanding"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className="flex flex-col items-center justify-center min-h-screen pt-16 px-4 ml-5">
//         <h1 className="text-9xl font-bold text-left mb-4">
//           Unlock Your Power of Deep Understanding
//         </h1>
//         <div className="flex justify-left w-full mb-8 rounded-full">
//           <input
//             type="text"
//             placeholder="Input the URL of YouTube video"
//             value={videoUrl}
//             onChange={(e) => setVideoUrl(e.target.value)}
//             className="w-2/3 p-3 pl-5 bg-gray-100 rounded-full shadow-sm focus:outline-none"
//           />
//           <button
//             onClick={handleSubmit}
//             className="ml-2 px-4 py-2 bg-teal-500 text-white rounded-full shadow "
//           >
//             Go
//           </button>
//         </div>
//         {loading && (
//           <div className="w-full flex justify-center items-center">
//             <div className="flex flex-col items-center">
//               <div
//                 id="videoPlayer"
//                 style={{ width: '100%', height: '315px' }}
//               ></div>
//               <p className="mt-4">Loading...</p>
//             </div>
//           </div>
//         )}
//         {data && (
//           <div className="mt-8">
//             <h2 className="text-2xl font-semibold">API Response:</h2>
//             <pre className="bg-gray-100 p-4 rounded-lg shadow-sm">
//               {JSON.stringify(data, null, 2)}
//             </pre>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }
import Head from 'next/head';
import SignUpButton from '../src/app/components/signUpButton';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // 假设后端请求成功
    setTimeout(() => {
      setLoading(false);
      router.push({
        pathname: '/preview',
        query: {
          videoUrl,
          data: JSON.stringify({ message: 'Video processed successfully' }),
        },
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
        <h1 className="text-9xl font-bold text-left mb-4">
          Unlock Your Power of Deep Understanding
        </h1>
        <div className="flex justify-left w-full mb-8 rounded-full">
          <input
            type="text"
            placeholder="Input the URL of YouTube video"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-2/3 p-3 pl-5 bg-gray-100 rounded-full shadow-sm focus:outline-none"
          />
          <button
            onClick={handleSubmit}
            className="ml-2 px-4 py-2 bg-teal-500 text-white rounded-full shadow "
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
      </main>
    </div>
  );
}
