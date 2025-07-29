// app/clients/page.tsx
"use client";

import { useState } from "react";

export default function ClientAreaLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with", email, password);
  };

  return (
    <main className="relative bg-[#DCAFB2] min-h-screen flex items-center justify-center">
      {/* — Background Image — */}
      <img
        src="https://i.imgur.com/bgReeWa.jpeg"
        alt="Peach background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* — Content Wrapper: centers everything — */}
      <div className="relative z-10 flex flex-col items-center px-4 space-y-8">
        {/* Hero Text */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Client Area
          </h1>
          <p className="mt-2 text-lg text-white/90">
            Log in to access your personalized plans
          </p>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-full text-lg font-medium hover:bg-red-600 transition"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
