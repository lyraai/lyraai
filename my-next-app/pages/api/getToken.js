// pages/api/getToken.js
import { GoogleAuth } from 'google-auth-library';

export default async function handler(req, res) {
  try {
    console.log('Starting getToken handler');
    if (!process.env.GOOGLE_CREDENTIALS) {
      console.error('GOOGLE_CREDENTIALS environment variable is missing');
      throw new Error('GOOGLE_CREDENTIALS environment variable is missing');
    }

    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    console.log('Parsed credentials successfully');

    const auth = new GoogleAuth({
      credentials,
    });

    const url = 'https://flask-hello-world-ys6elaj32q-an.a.run.app';

    const client = await auth.getIdTokenClient(url);
    const headers = await client.getRequestHeaders();
    const idToken = headers.Authorization.split(' ')[1];
    if (!idToken) {
      throw new Error('Failed to obtain ID token');
    }
    console.log(`ID Token: ${idToken}`);

    res.status(200).json({ idToken });
  } catch (error) {
    console.error('Error getting ID token:', error);
    res.status(500).json({ error: error.message });
  }
}
