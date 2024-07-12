// pages/_app.js
import 'tailwindcss/tailwind.css';
import '../src/app/styles/globals.css';

import Navbar from '../src/app/components/navBar';
import Footer from '../src/app/components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
