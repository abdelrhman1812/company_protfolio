import { QuickLink, RecentPost, typeT } from "@/lib/types";

export const quickLinks = (t: (key: string) => string): QuickLink[] => [
  { title: t("Footer.quick_links.0.title"), href: "/" },
  { title: t("Footer.quick_links.1.title"), href: "/" },
  { title: t("Footer.quick_links.2.title"), href: "/" },
  { title: t("Footer.quick_links.3.title"), href: "/" },
  { title: t("Footer.quick_links.4.title"), href: "/" },
  { title: t("Footer.quick_links.5.title"), href: "/" },
];

export const recentPosts = (t: typeT): RecentPost[] => [
  {
    id: "1",
    date: t("Footer.recentPosts.0.date"),
    title: t("Footer.recentPosts.0.title"),
    image: "/Image/Footer/small-post.jpg",
  },
  {
    id: "2",
    date: t("Footer.recentPosts.1.date"),
    title: t("Footer.recentPosts.1.title"),
    image: "/Image/Footer/small-post-2.jpg",
  },
];
