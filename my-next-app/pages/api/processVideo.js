// pages/api/processVideo.js

export default async function handler(req, res) {
  const { videoUrl } = req.body;

  try {
    const response = await fetch('https://YOUR_CLOUD_FUNCTION_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ videoUrl }),
    });
    const data = await response.json();

    if (data.error) {
      res.status(500).json({ error: 'Error processing video' });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error processing video' });
  }
}
