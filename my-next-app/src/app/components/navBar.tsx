import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative flex justify-between items-center px-8 py-4 bg-white ">
      <div className="flex items-center">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src="/logo-black.png"
              alt="Lyra Logo"
              width={120} // 缩小logo尺寸
              height={120} // 缩小logo尺寸
              className="md:w-150 md:h-150" // 在大屏幕上恢复原尺寸
            />
          </a>
        </Link>
      </div>
      <div className="hidden md:flex space-x-6 text-base font-regular items-center">
        <Link href="/" legacyBehavior>
          <a className="text-sm text-gray-500 hover:text-black transition-colors duration-200">
            Home
          </a>
        </Link>
        <Link href="/products" legacyBehavior>
          <a className="text-sm text-gray-500 hover:text-black transition-colors duration-200">
            Products
          </a>
        </Link>
        <Link href="/pricing" legacyBehavior>
          <a className="text-sm text-gray-500 hover:text-black transition-colors duration-200">
            Pricing
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="text-sm text-gray-500 hover:text-black transition-colors duration-200">
            Our team
          </a>
        </Link>
        <Link href="/signup" legacyBehavior>
          <a className="text-sm px-3 py-1.5 bg-teal-500 text-white rounded-full">
            Sign up
          </a>
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none z-50">
          {menuOpen ? (
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-white z-40 pt-16 shadow-none">
          <div className="px-4">
            <Link href="/" legacyBehavior>
              <a className="block py-2 text-gray-500 hover:text-black transition-colors duration-200 pl-4">
                Home
              </a>
            </Link>
            <Link href="/products" legacyBehavior>
              <a className="block py-2 text-gray-500 hover:text-black transition-colors duration-200 pl-4">
                Products
              </a>
            </Link>
            <Link href="/pricing" legacyBehavior>
              <a className="block py-2 text-gray-500 hover:text-black transition-colors duration-200 pl-4">
                Pricing
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="block py-2 text-gray-500 hover:text-black transition-colors duration-200 pl-4">
                About us
              </a>
            </Link>
            <Link href="/signup" legacyBehavior>
              <a className="block py-2 border-t border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition pl-4">
                Sign up
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
