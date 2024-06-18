// pages/about.js
import Head from 'next/head';

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>About Us - Lyra</title>
        <meta
          name="description"
          content="Learn more about the team behind Lyra"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          Meet the innovative minds behind Lyra!
        </h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Replace the following placeholders with actual team member details */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h2 className="text-lg font-semibold">Meishu Song</h2>
            <p className="text-gray-600">Role</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h2 className="text-lg font-semibold">Zheyu Feng</h2>
            <p className="text-gray-600">Role</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h2 className="text-lg font-semibold">Zijiang Yang</h2>
            <p className="text-gray-600">Role</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h2 className="text-lg font-semibold">Bailang Cheng</h2>
            <p className="text-gray-600">Role</p>
          </div>
        </div>
      </main>
    </div>
  );
}
