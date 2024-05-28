// pages/_app.js
import 'tailwindcss/tailwind.css';
import '../src/app/styles/globals.css'; 
import Navbar from '../src/app/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;