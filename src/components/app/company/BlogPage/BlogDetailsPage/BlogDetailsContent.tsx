import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BlogDetailsContent = () => {
  const t = useTranslations("BlogPage");
  return (
    <>
      {/* main image */}
      <Image
        src="/Image/Blogs/next.png"
        alt="main"
        width={1275}
        height={660}
        className="rounded-xl"
      />
      {/* ==================================================== Title ==================================================== */}
      <h3 className="text-2xl mt-5 font-semibold text-secondary md:text-4xl">
        {t("blog.title")}
      </h3>
      {/* ==================================================== Author ==================================================== */}
      <div className="flex items-center space-x-2 my-5">
        <span className="text-secondary font-semibold">{t("blog.author")}</span>
        <span className="text-secondary font-semibold">/</span>
        <span className="text-secondary font-semibold">
          {t("blog.category")}
        </span>
      </div>

      {/* ==================================================== Content ==================================================== */}
      <p className="mb-5 text-lightGray leading-7">{t("blog.mainContent.0")}</p>

      <p className="mb-5 text-lightGray leading-7">{t("blog.mainContent.1")}</p>
      {/* ==================================================== resources ==================================================== */}
      <div className="bg-secondary py-[60px] px-8 md:px-[50px] my-5 rounded-lg relative">
        <Quote className="absolute top-0 left-0 text-white opacity-10 w-full h-full" />
        {/* text */}
        <p className="text-white text-xl md:text-2xl mb-5">
          {t("blog.resourcesQuote")}
        </p>
        {/* author */}
        <h5 className="flex items-center space-x-2">
          <span className="bg-primary h-[0.5px] w-12"></span>
          <span className="text-primary "> {t("blog.quoteAuthor")}</span>
        </h5>
      </div>
      {/* ==================================================== Completed content ==================================================== */}
      <p className="mb-5 text-lightGray leading-7">{t("blog.mainContent.2")}</p>

      <p className="mb-5 text-lightGray leading-7">
        {t("blog.mainContent.3")}
        {t("blog.mainContent.2")}
        {t("blog.mainContent.1")}
        {t("blog.mainContent.0")}
      </p>

      {/* ==================================================== Other Images =================================================== */}

      <div className="grid grid-cols-1  md:grid-cols-2 gap-3 mb-5">
        <Image
          src="/Image/Blogs/Blog_Details/blog_d_1.jpg"
          alt="main"
          width={410}
          height={300}
          className="rounded-xl w-full"
        />
        <Image
          src="/Image/Blogs/Blog_Details/blog_d_2.png"
          alt="main"
          width={410}
          height={300}
          className="rounded-xl w-full"
        />
      </div>
      {/* ==================================================== Completed content ==================================================== */}
      <p className="mb-5 text-lightGray leading-7">
        {t("blog.mainContent.3")}
        {t("blog.mainContent.2")}
        {t("blog.mainContent.1")}
        {t("blog.mainContent.0")}
      </p>
      <p className="mb-5 text-lightGray leading-7">
        {t("blog.mainContent.1")}
        {t("blog.mainContent.0")}
      </p>
    </>
  );
};

export default BlogDetailsContent;
