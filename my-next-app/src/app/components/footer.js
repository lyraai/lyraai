import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white w-full py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-10 my-10">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-24 h-24 relative">
              <Image
                src="/logo-black.png"
                alt="Lyra Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-sm text-gray-600">
              Boost your Business with Emotional AI Solution.
            </p>
          </div>
          <div className="hidden md:flex space-x-16">
            <div className="flex flex-col space-y-4 ">
              <h4
                className="text-sm
               font-semibold text-gray-900"
              >
                Product
              </h4>
              <Link href="/products" legacyBehavior>
                <a className="text-sm text-gray-500 hover:text-black">
                  Features
                </a>
              </Link>
              <Link href="/pricing" legacyBehavior>
                <a className="text-sm text-gray-500 hover:text-black">
                  Pricing
                </a>
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
              <Link href="/blog" legacyBehavior>
                <a className="text-sm text-gray-500 hover:text-black">Blog</a>
              </Link>
              <Link href="/apps" legacyBehavior>
                <a className="text-sm text-gray-500 hover:text-black">Apps</a>
              </Link>
              <Link href="/learn" legacyBehavior>
                <a className="text-sm text-gray-500 hover:text-black">Learn</a>
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-sm font-semibold text-gray-900">Company</h4>
              <Link href="/about" legacyBehavior>
                <a className="text-sm text-gray-500 hover:text-black">
                  Our Story
                </a>
              </Link>
              <Link href="/team" legacyBehavior>
                <a className="text-sm text-gray-500 hover:text-black">
                  Our Team
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="text-sm text-gray-500 hover:text-black">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <p className="text-sm text-gray-600">Lyra • Copyright © 2024</p>
          <div className="flex space-x-4">
            <Link href="/terms" legacyBehavior>
              <a className="text-sm text-gray-500 hover:text-black">
                Terms of Service
              </a>
            </Link>
            <Link href="/privacy" legacyBehavior>
              <a className="text-sm text-gray-500 hover:text-black">
                Privacy Policy
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
