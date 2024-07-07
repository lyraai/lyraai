export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const response = await fetch(
      'https://flask-hello-world-ys6elaj32q-an.a.run.app/download_audio_yt_dlp',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server error: ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error downloading audio:', error);
    res.status(500).json({ error: error.message });
  }
}
