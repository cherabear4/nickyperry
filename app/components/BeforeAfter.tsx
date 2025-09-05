// components/BeforeAfter.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

export default function BeforeAfter({
  before, after, alt
}: { before: string; after: string; alt?: string }) {
  const [x, setX] = useState(50);
  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-black/5">
      <Image src={after} alt={alt ?? "after"} fill className="object-cover" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - x}% 0 0)` }}
      >
        <Image src={before} alt={alt ?? "before"} fill className="object-cover" />
      </div>
      <input
        type="range" min={0} max={100} value={x}
        onChange={(e) => setX(parseInt(e.target.value))}
        className="absolute inset-x-6 bottom-4"
      />
      <div className="absolute left-3 top-3 rounded-md bg-white/80 px-2 py-1 text-xs font-medium">Before</div>
      <div className="absolute right-3 top-3 rounded-md bg-white/80 px-2 py-1 text-xs font-medium">After</div>
    </div>
  );
}
