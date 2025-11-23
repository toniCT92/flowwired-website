"use client";
import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const params = useSearchParams();
  const pack = params.get("pack");

  return (
    <main className="max-w-3xl mx-auto py-24 px-6 text-white text-center">
      <h1 className="text-4xl font-bold text-indigo-400 mb-6">
        Checkout — {pack}
      </h1>
      <p className="text-gray-400 mb-10">
        You’re about to get the {pack}. Payment and setup integration coming soon.
      </p>
      <a
        href="/contact"
        className="bg-indigo-600 px-6 py-3 rounded-lg text-white hover:bg-indigo-700 transition"
      >
        Contact Me to Complete Purchase
      </a>
    </main>
  );
}
