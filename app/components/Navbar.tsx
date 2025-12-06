"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#020817]/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="w-full flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Flowwired
        </Link>

        {/* Nav links */}
        <div className="flex gap-6 items-center text-gray-300">
          <Link href="/templates">Templates</Link>
          <Link href="/custom">Custom</Link>
          <Link href="/about">About</Link>
          <Link href= "/blog">Blog</Link>
          <Link href="/feedback">Feedback</Link>
          <Link href="/contact">Contact</Link>

          {/* Sign In */}
          <Link
            href="/login"
            className="px-4 py-2 rounded-md border border-indigo-600 hover:bg-indigo-600 hover:text-white transition"
          >
            Sign In
          </Link>
        </div>

      </div>
    </nav>
  );
}
