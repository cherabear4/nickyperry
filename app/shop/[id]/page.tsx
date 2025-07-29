// app/blog/[id]/page.tsx
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/util/firebase";
import { Post, ShopItem } from "@/app/types/types"; 
import { ArrowBigLeft, Link } from "lucide-react";
import ShopItemClient from "./ShopItemClient";

type Props = { params: Promise<{id: string}>};

export default async function ShopItemPage({ params }: Props) {
  const { id } = await params;
  if (!id) return notFound();

  // grab your shop item
  const snap = await getDoc(doc(db, "shop", id));
  if (!snap.exists()) return notFound();

  // Firestore stores a single `image` but our UI wants an array for the carousel
  const data = snap.data() as Omit<ShopItem, "id"> & { image: string };
  const item: ShopItem & { images: string[] } = {
    ...data,
    id: snap.id,
    // turn that single image into a 1-item carousel
    images: [data.image],
  };

  return (<div className="overflow-hidden"><ShopItemClient item={item} /></div>);
}
