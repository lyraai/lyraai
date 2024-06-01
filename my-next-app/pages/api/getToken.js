// pages/api/getToken.js
import { GoogleAuth } from 'google-auth-library';

// export default async function handler(req, res) {
//   try {
//     // 确保环境变量已正确设置
//     if (!process.env.GOOGLE_CREDENTIALS) {
//       throw new Error('GOOGLE_CREDENTIALS environment variable is missing');
//     }

//     // 解析环境变量中的凭证
//     const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

//     // 创建 GoogleAuth 实例
//     const auth = new GoogleAuth({
//       credentials,
//       scopes: ['https://www.googleapis.com/auth/cloud-platform'],
//     });

//     // 获取客户端和项目 ID
//     const client = await auth.getClient();
//     const projectId = await auth.getProjectId();
//     console.log(`Using project ID: ${projectId}`);

//     // 获取访问令牌
//     const accessTokenResponse = await client.getAccessToken();
//     const accessToken = accessTokenResponse.token;
//     if (!accessToken) {
//       throw new Error('Failed to obtain access token');
//     }
//     console.log(`Access Token: ${accessToken}`);

//     // 目标 URL
//     const url = 'https://flask-hello-world-ys6elaj32q-an.a.run.app';

//     // 发起请求
//     const result = await client.request({
//       url,
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     res.status(200).json(result.data);
//   } catch (error) {
//     console.error('Error getting access token:', error);
//     res.status(500).json({ error: error.message });
//   }
// }

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
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const client = await auth.getClient();
    const projectId = await auth.getProjectId();
    console.log(`Using project ID: ${projectId}`);

    const accessTokenResponse = await client.getAccessToken();
    const accessToken = accessTokenResponse.token;
    if (!accessToken) {
      throw new Error('Failed to obtain access token');
    }
    console.log(`Access Token: ${accessToken}`);

    const url = 'https://flask-hello-world-ys6elaj32q-an.a.run.app';

    const result = await client.request({
      url,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('API request successful', result.data);
    res.status(200).json(result.data);
  } catch (error) {
    console.error('Error getting access token:', error);
    res.status(500).json({ error: error.message });
  }
}
