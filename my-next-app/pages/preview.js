import { useRouter } from 'next/router';

export default function Preview() {
  const router = useRouter();
  const { videoUrl, data } = router.query;

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">Video Preview</h1>
      <div className="mb-4">
        <strong>Video URL:</strong> {videoUrl}
      </div>
      <div>
        <strong>Data:</strong> {data}
      </div>
    </div>
  );
}
