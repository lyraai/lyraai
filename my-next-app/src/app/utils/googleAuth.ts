import { GoogleAuth } from 'google-auth-library';

export async function getAccessToken() {
  const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}');
  const auth = new GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/cloud-platform']
  });

  const client = await auth.getClient();
  const projectId = await auth.getProjectId();
  const url = `https://flask-hello-world-ys6elaj32q-an.a.run.app`; // 替换为你的 Cloud Run URL

  const res = await client.request({ url });
  return res.data;
}
