// pages/_app.js
import 'tailwindcss/tailwind.css';
import '../src/app/styles/globals.css';

import Navbar from '../src/app/components/navBar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
