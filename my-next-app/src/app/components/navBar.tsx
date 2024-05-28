import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div className="text-xl font-bold">Lyra</div>
      <div className="flex space-x-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/pricing">
          <a>Pricing</a>
        </Link>
        <Link href="/about">
          <a>About us</a>
        </Link>
        <Link href="/signup">
          <a className="px-4 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition">
            Sign up
          </a>
        </Link>
      </div>
    </nav>
  );
}
