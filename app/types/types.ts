export interface Post {
  category: string;
  content: string;
  date: string;
  excerpt: string;
  image: string;
  readtime: string;
  title: string;
  id: string;
}

export interface ShopItem
{
  name: string;
  price: number;
  sizes: string[];
  colors: string[];
  image: string;
  id: string;
  description: string;
}