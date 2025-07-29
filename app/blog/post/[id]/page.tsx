// app/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/util/firebase";
import { Post } from "@/app/types/types"; 
import { ArrowBigLeft, Link } from "lucide-react";

type Props = { params: { id: string } };

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  if (!id) return notFound();
  // 1️⃣ fetch the post from Firestore
  const ref = doc(db, "blog", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return notFound();

  const post = { id: snap.id, ...(snap.data() as Omit<Post, "id">) };

  return (
    <article className="min-h-screen bg-white">
      {/* ——— Hero header with peach backdrop ——— */}
      <header className="relative h-64 md:h-80 bg-[#DCAFB2]/50 overflow-hidden">
        {/* semi-transparent peach image */}
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-3xl mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white lulo">
            {post.title}
          </h1>
          <p className="mt-2 text-sm md:text-base text-white/90 raleway">
            {post.category} • {new Date(post.date).toLocaleDateString()} • {post.readtime}
          </p>
        </div>
      </header>

      {/* ——— Post content ——— */}
      <section className="prose prose-lg lg:prose-xl max-w-3xl mx-auto py-12 px-4">

        {/* If your content is plain text: */}
        <h1 className="lulo text-3xl">{post.title}</h1>
        <p className="raleway">{post.content}</p>

        {/* ——— Or, if it’s HTML: */}
        {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
      </section>
    </article>
  );
}
