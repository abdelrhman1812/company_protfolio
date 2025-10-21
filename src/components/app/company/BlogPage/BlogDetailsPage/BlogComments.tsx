import { comments } from "@/data/mock-comments";
import { useTranslations } from "next-intl";
import SingleComment from "./SingleComment";

const BlogComments = () => {
  const t = useTranslations("BlogPage.blog");
  return (
    <section>
      <h3 className="font-bold text-2xl">
        {t("comments.title")} ({comments?.length})
      </h3>

      {comments(t).map((comment) => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </section>
  );
};

export default BlogComments;
