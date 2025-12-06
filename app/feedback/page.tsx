"use client";

import { useState, useEffect } from "react";

type Feedback = {
  message: string;
  user: string;
  createdAt: string;
};

export default function FeedbackPage() {
  const [comments, setComments] = useState<Feedback[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/feedback");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error("Failed to load feedback:", err);
      }
      setLoading(false);
    }
    load();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let newComment: Feedback;

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      newComment = await res.json();
    } catch (err) {
      console.warn("No backend connected, using fallback comment.");

      newComment = {
        message,
        user: "You",
        createdAt: new Date().toISOString(),
      };
    }

    setComments((prev: Feedback[]) => [newComment, ...prev]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white p-6 pt-24 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Community Feedback</h1>
      <p className="text-gray-400 mb-10">
        Share your thoughts, suggestions, and ideas. All posts are visible to the community.
      </p>

      {/* Comment box */}
      <form onSubmit={handleSubmit} className="mb-10">
        <textarea
          placeholder="Write your feedback..."
          className="w-full h-28 p-3 bg-gray-900 border border-gray-700 rounded-md outline-none focus:border-indigo-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button
          type="submit"
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Post Feedback
        </button>
      </form>

      {/* Show feedback list */}
      <div className="space-y-6">
        {loading ? (
          <p className="text-gray-400">Loading feedback...</p>
        ) : comments.length === 0 ? (
          <p className="text-gray-400">No feedback yet. Be the first!</p>
        ) : (
          comments.map((c: Feedback, i: number) => (
            <div
              key={i}
              className="p-4 bg-[#0B1120] rounded-lg border border-gray-800"
            >
              <div className="text-indigo-400 font-semibold mb-1">
                {c.user || "Anonymous User"}
              </div>
              <div className="text-gray-300">{c.message}</div>
              <div className="text-gray-500 text-sm mt-1">
                {new Date(c.createdAt).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
