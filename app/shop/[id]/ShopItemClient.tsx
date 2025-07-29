"use client";

import { useState } from "react";
import NextLink from "next/link";
import { ArrowBigLeft, ChevronLeft, ChevronRight } from "lucide-react";
import type { ShopItem } from "@/app/types/types";
import useIsUsingMobile from "@/app/hooks/useMobile";

interface Props {
  item: ShopItem & { images: string[] };
}

export default function ShopItemClient({ item }: Props) {
  const [mainImage, setMainImage] = useState(0);
  const [size, setSize] = useState(item.sizes[0] || "");
  const [color, setColor] = useState(item.colors[0] || "");
  const [qty, setQty] = useState(1);
  const isMobile = useIsUsingMobile();

  const prevImage = () =>
    setMainImage((i) => (i - 1 + item.images.length) % item.images.length);
  const nextImage = () =>
    setMainImage((i) => (i + 1) % item.images.length);

  return (
    <main className="bg-[#DCAFB2] min-h-screen pb-12">
      <img
        src="https://i.imgur.com/bgReeWa.jpeg"
        className={isMobile ? 'absolute top-0 left-0 w-full h-full object-contain scale-220 z-10' : 'absolute top-0 left-0 w-full h-full object-contain scale-[110%] z-10'}
        alt="Background"
      />
      <div className="z-20 relative">
        {/* ← Back to shop list */}
      <div className="max-w-6xl mx-auto px-4 pt-20">
        <NextLink
          href="/shop"
          className="inline-flex items-center text-white hover:underline"
        >
          <ArrowBigLeft className="mr-2" /> Back to Shop
        </NextLink>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4 pt-8">
        {/* — Image + Thumbnails — */}
        <div className="flex-1">
          <div className="bg-white p-4 rounded shadow-lg">
            <img
              src={item.images[mainImage]}
              alt={item.name}
              width={600}
              height={600}
              className="object-cover w-full h-[400px] md:h-[500px] mx-auto"
            />
            <div className="mt-4 flex items-center">
              <button
                onClick={prevImage}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex overflow-x-auto space-x-2 mx-2">
                {item.images.map((src, idx) => (
                  <div
                    key={idx}
                    onClick={() => setMainImage(idx)}
                    className={`w-16 h-16 rounded border-2 cursor-pointer ${
                      idx === mainImage
                        ? "border-red-500"
                        : "border-transparent hover:border-gray-300"
                    } overflow-hidden`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${idx + 1}`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={nextImage}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* — Details & Form — */}
        <aside className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{item.name}</h1>
          <p className="text-2xl text-red-600">
            ${item.price.toFixed(2)}
          </p>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                {item.sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Color</label>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full border rounded px-3 py-2"
              >
                {item.colors.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Quantity</label>
              <div className="inline-flex items-center border rounded">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-6">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <button className="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition">
              Add to Cart
            </button>
          </div>
        </aside>
      </div>

      {/* — Full Description — */}
      <section className="max-w-6xl mx-auto px-4 pt-8 prose prose-lg prose-pink text-white">
        {item.description.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>
      </div>
    </main>
  );
}