'use client'
import { getAuth } from "firebase/auth";
import BlogCard from "./components/BlogCard";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../util/firebase";
import { getAllDocuments } from "../util/firebaseutil";
import { Post } from "@/app/types/types";
import { useRouter } from "next/navigation";

const Blog = () => {
  const [authed, setAuthed] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    // this runs in the browser only
    const unsubscribe = auth.onAuthStateChanged(u => setAuthed(u));
    return unsubscribe;
  }, []);
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  useEffect(() => {
    getAllDocuments<Post>("blog")
      .then((docs) => {
        setBlogPosts(docs);
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);
  const categories = ["All", "Booty Building", "Nutrition", "Training", "Mindset", "Health"];

  return (
    <div className="antialiased">
      {/* HERO */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* full-bleed peach image */}
        <img
          src="https://i.imgur.com/bgReeWa.jpeg"
          alt="Peach background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* optional semi‑opaque peach overlay if you want to tone down the photo */}
        <div className="absolute inset-0 bg-[#DCAFB2]/50 z-10" />

        {/* hero content */}
        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 lulo">
            MY <span className="text-red-500">BLOG</span>
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto raleway">
            Real talk about fitness, nutrition, and building the body and confidence you deserve
          </p>

          {/* search */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full pr-10 bg-white/20 border border-white placeholder-white/70 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded transition ${
                  cat === "All"
                    ? "bg-red-500 text-white"
                    : "bg-white/20 text-white hover:bg-white/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      {authed ? (
        <button onClick={() => router.push("/blog/new")} className="px-6 py-3 bg-red-500 text-white hover:bg-red-600 transition whitespace-nowrap w-full flex justify-center">Write a Post</button>
      ) : (
        <></>
      )}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white h-full rounded-lg overflow-hidden">
                {/* wrap your BlogCard in a white container so it doesn’t inherit any stray pink */}
                <BlogCard readTime={post.readtime} {...post} />
              </div>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Never Miss a Post
            </h2>
            <p className="text-gray-700 mb-8">
              Get weekly tips, recipes, and motivation delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;