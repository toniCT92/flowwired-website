"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#020817]/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-white">Flowwired</Link>
        <div className="flex gap-6 text-gray-300">
          <Link href="/templates">Templates</Link>
          <Link href="/custom">Custom</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
