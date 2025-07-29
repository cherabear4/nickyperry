'use client'
import { getAuth } from "firebase/auth";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../util/firebase";
import { getAllDocuments } from "../util/firebaseutil";
import { ShopItem } from "@/app/types/types";
import { useRouter } from "next/navigation";
import ShopCard from "./component/ShopCard";

const Blog = () => {
  const [authed, setAuthed] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    // this runs in the browser only
    const unsubscribe = auth.onAuthStateChanged(u => setAuthed(u));
    return unsubscribe;
  }, []);
  const [blogPosts, setBlogPosts] = useState<ShopItem[]>([]);
  useEffect(() => {
    getAllDocuments<ShopItem>("shop")
      .then((docs) => {
        setBlogPosts(docs);
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);
  const categories = ["All", "Men", "Women", "Kids"];

  return (
    <div className="antialiased raleway">
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
            SHOP <span className="text-red-500">SWAG</span>
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto raleway">
            Step out in confidence with my hottest and latest drops.
          </p>

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
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white h-full rounded-lg overflow-hidden">
                {/* wrap your BlogCard in a white container so it doesn’t inherit any stray pink */}
                <ShopCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;