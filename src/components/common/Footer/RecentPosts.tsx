import { type RecentPost, typeT } from "@/lib/types";
import Image from "next/image";

interface RecentPostsProps {
  posts: (t: typeT) => RecentPost[];
  t: typeT;
}

export function RecentPosts({ posts, t }: RecentPostsProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">
        {t("Footer.recentPost")}
      </h3>
      <div className="space-y-4">
        {posts(t).map((post) => (
          <div key={post.id} className="flex gap-4">
            <Image
              src={post.image}
              alt={post.title}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <div>
              <time className="text-red-500 text-sm">{post.date}</time>
              <h4 className="text-white hover:text-red-500 transition-colors">
                <a href="#">{post.title}</a>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
