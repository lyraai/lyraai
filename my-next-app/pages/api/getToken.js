// pages/api/getToken.js
import { GoogleAuth } from 'google-auth-library';

export default async function handler(req, res) {
  try {
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    const auth = new GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const client = await auth.getClient();
    const projectId = await auth.getProjectId();
    const url = 'https://flask-hello-world-ys6elaj32q-an.a.run.app';

    const result = await client.request({ url });
    res.status(200).json(result.data);
  } catch (error) {
    console.error('Error getting access token:', error);
    res.status(500).json({ error: 'Error getting access token' });
  }
}

// import { GoogleAuth } from 'google-auth-library';

// async function getAccessToken() {
//   const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
//   const auth = new GoogleAuth({
//     credentials,
//     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
//   });

//   const client = await auth.getClient();
//   const projectId = await auth.getProjectId();
//   const url = 'https://flask-hello-world-ys6elaj32q-an.a.run.app';

//   const res = await client.request({ url });
//   return res.data;
// }

// getAccessToken()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
