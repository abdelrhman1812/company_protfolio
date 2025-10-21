import StarRating from "@/components/common/StarRating/StarRating";
import { CommentsTypes } from "@/lib/types";
import { Undo2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

type CommentProps = {
  comment: CommentsTypes;
};

const SingleComment = ({ comment }: CommentProps) => {
  const t = useTranslations("BlogPage.blog.comments");
  return (
    <div className="flex items-start gap-4 my-5 border-t border-gray-200 py-5">
      <Image
        src={comment.author.img}
        alt={comment.author.name}
        width={150}
        height={150}
        className=" rounded-full "
      />
      <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 justify-between items-start">
        <div>
          <h3 className="font-bold text-2xl mb-2">{comment.author.name}</h3>
          <p className="text-primary font-medium">{comment.data}</p>
          <StarRating maxStars={5} rate={comment.rate} />
          <p className="mt-3 text-lightGray leading-6 md:leading-7">
            {comment.comment}
          </p>
        </div>
        <button className="flex text-white items-center gap-2 bg-secondary px-3 py-2 rounded">
          <Undo2 />
          {t("replay")}
        </button>
      </div>
    </div>
  );
};

export default SingleComment;
