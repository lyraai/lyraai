// // pages/TestPage.js
// import { useState } from 'react';
// import styles from '../src/app/styles/TestPage.module.css';

// export default function TestPage() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('/api/getToken');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <h1>Hello World Request</h1>
//         <button onClick={fetchData}>Fetch Data</button>
//         {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//         {error && <p>Error: {error}</p>}
//       </main>
//     </div>
//   );
// }
export default function Placeholder() {
  return (
    <div>
      <h1>This is a placeholder page</h1>
    </div>
  );
}
