export default async function handler(req, res) {
  const { videoUrl } = req.body;

  try {
    const response = await fetch(
      'https://flask-hello-world-ys6elaj32q-an.a.run.app',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.YOUR_API_KEY}`, // 根据需要添加
        },
        body: JSON.stringify({ videoUrl }),
      },
    );
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
