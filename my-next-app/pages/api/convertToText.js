// pages/api/convertToText.js

import axios from 'axios';

export default async function handler(req, res) {
  const { audioUrl } = req.body;
  const apiKey = process.env.SPEECH_API_KEY;

  const ttsApiUrl = `https://speech.googleapis.com/v1/speech:recognize?key=${apiKey}`;

  try {
    const response = await axios.post(ttsApiUrl, {
      config: {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
        enableWordTimeOffsets: true,
      },
      audio: {
        uri: audioUrl,
      },
    });
    const transcript = response.data.results.flatMap((result) =>
      result.alternatives[0].words.map((word) => ({
        text: word.word,
        time: word.startTime.seconds + word.startTime.nanos * 1e-9,
      })),
    );
    res.status(200).json({ transcript });
  } catch (error) {
    res.status(500).json({ error: 'Error converting audio to text' });
  }
}
