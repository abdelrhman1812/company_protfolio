import { CommentsTypes, typeT } from "@/lib/types";

export const comments = (t: typeT): CommentsTypes[] => [
  {
    id: 1,
    comment: t("comments.list.0.comment"),
    rate: 5,
    data: t("comments.list.0.date"),
    author: {
      name: t("comments.list.0.author.name"),
      img: "/Image/Blogs/Blog_Details/comment2.png",
    },
  },
  {
    id: 2,
    comment: t("comments.list.1.comment"),
    rate: 4,
    data: t("comments.list.1.date"),
    author: {
      name: t("comments.list.1.author.name"),
      img: "/Image/Blogs/Blog_Details/comment3.png",
    },
  },
];
