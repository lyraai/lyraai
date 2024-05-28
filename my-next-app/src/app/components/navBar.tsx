import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md bg-white">
      <div className="flex items-center">
        <Image src="/logo-black.png" alt="Lyra Logo" width={100} height={100} />
      </div>
      <div className="flex justify-between items-center space-x-6">
        <Link href="/" legacyBehavior>
          <a className="text-black">Home</a>
        </Link>
        <Link href="/products" legacyBehavior>
          <a className="text-black">Products</a>
        </Link>
        <Link href="/pricing" legacyBehavior>
          <a className="text-black">Pricing</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="text-black">About us</a>
        </Link>
        <Link href="/signup" legacyBehavior>
          <a className="px-4 py-2 border border-teal-500 text-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition">
            Sign up
          </a>
        </Link>
      </div>
    </nav>
  );
}
