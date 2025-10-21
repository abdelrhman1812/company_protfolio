import { BlogPost } from "@/lib/types";

export const BLOG_POSTS = (t: (key: string) => string): BlogPost[] => [
  {
    id: "1",
    date: {
      day: 20,
      month: t("posts.0.date.month"),
    },
    image: "/Image/Blogs/next.png",
    author: t("posts.0.author"),
    category: t("posts.0.category"),
    title: t("posts.0.title"),
    excerpt: t("posts.0.excerpt"),
    slug: t("posts.0.slug"),
  },
  {
    id: "2",
    date: {
      day: 20,
      month: t("posts.1.date.month"),
    },
    image: "/Image/Blogs/ai.jpg",
    author: t("posts.1.author"),
    category: t("posts.1.category"),
    title: t("posts.1.title"),
    excerpt: t("posts.1.excerpt"),
    slug: t("posts.1.slug"),
  },
  {
    id: "3",
    date: {
      day: 20,
      month: t("posts.2.date.month"),
    },
    image: "/Image/Blogs/cyber.jpg",
    author: t("posts.2.author"),
    category: t("posts.2.category"),
    title: t("posts.2.title"),
    excerpt: t("posts.2.excerpt"),
    slug: t("posts.2.slug"),
  },
  {
    id: "4",
    date: {
      day: 20,
      month: t("posts.3.date.month"),
    },
    image: "/Image/Blogs/ai.jpg",
    author: t("posts.3.author"),
    category: t("posts.3.category"),
    title: t("posts.3.title"),
    excerpt: t("posts.3.excerpt"),
    slug: t("posts.3.slug"),
  },
  {
    id: "5",
    date: {
      day: 20,
      month: t("posts.4.date.month"),
    },
    image: "/Image/Blogs/next.png",
    author: t("posts.4.author"),
    category: t("posts.4.category"),
    title: t("posts.4.title"),
    excerpt: t("posts.4.excerpt"),
    slug: t("posts.4.slug"),
  },
  {
    id: "6",
    date: {
      day: 20,
      month: t("posts.5.date.month"),
    },
    image: "/Image/Blogs/next.png",
    author: t("posts.5.author"),
    category: t("posts.5.category"),
    title: t("posts.5.title"),
    excerpt: t("posts.5.excerpt"),
    slug: t("posts.5.slug"),
  },
];
