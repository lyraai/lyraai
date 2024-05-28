// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Lyra</div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/products" className="hover:underline">Products</Link>
        </li>
        <li>
          <Link href="/pricing" className="hover:underline">Pricing</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">About us</Link>
        </li>
      </ul>
      <Link href="/signup" className="px-4 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition">Sign up</Link>
    </nav>
  );
};

export default Navbar;
