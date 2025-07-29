import { Card } from "./sub/Card";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  id: string;
}

const BlogCard = ({
  title,
  excerpt,
  date,
  category,
  readTime,
  image,
  id
}: BlogCardProps) => {
  return (
    <Card className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <span>{readTime} read</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition">
          {title}
        </h3>

        <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>

        <a href={`/blog/post/${id}`} className="text-red-500 hover:underline">
          Read More
        </a>
      </div>
    </Card>
  );
};

export default BlogCard;
