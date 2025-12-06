"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginModal() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");

  const closeModal = () => router.back(); 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* DARK BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* MODAL CARD */}
      <div className="relative w-full max-w-md mx-auto bg-[#0B1120] p-8 rounded-xl border border-gray-800 shadow-xl animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-gray-400 hover:text-white text-xl"
        >
          ×
        </button>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8 mt-2">
          <button
            onClick={() => setMode("login")}
            className={`pb-2 text-lg ${
              mode === "login"
                ? "text-indigo-400 border-b-2 border-indigo-400"
                : "text-gray-400"
            }`}
          >
            Sign In
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`pb-2 text-lg ${
              mode === "signup"
                ? "text-indigo-400 border-b-2 border-indigo-400"
                : "text-gray-400"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* FORM */}
        <AuthForm mode={mode} />
      </div>
    </div>
  );
}

function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-3 rounded-md bg-gray-900 border border-gray-700 outline-none focus:border-indigo-500"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="p-3 rounded-md bg-gray-900 border border-gray-700 outline-none focus:border-indigo-500"
        required
      />

      {mode === "signup" && (
        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          className="p-3 rounded-md bg-gray-900 border border-gray-700 outline-none focus:border-indigo-500"
          required
        />
      )}

      <button
        type="submit"
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 w-full py-3 rounded-md font-semibold transition"
      >
        {mode === "login" ? "Sign In" : "Create Account"}
      </button>
    </form>
  );
}
