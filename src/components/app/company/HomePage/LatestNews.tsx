"use client";
import TitleSection from "@/components/common/TitleSection/TitleSection";
import { BLOG_POSTS } from "@/data/mock-blogs";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import SingleBlog from "../BlogPage/SingleBlog";

const LatestNews = ({ show }: { show: boolean }) => {
  const t = useTranslations("BlogPage");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(
    JSON.parse(JSON.stringify(BLOG_POSTS(t))).length / itemsPerPage
  ); //if we have 9 items / total pages = (9/3) = 3

  const currentPosts = BLOG_POSTS(t).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage // (0,3) (3,6) (6,9) ....
  );

  return (
    <section className="py-[120px]">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <TitleSection
            title={t("latest_blog")}
            subtitle={t("latest_news_articles")}
          />
        </div>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <SingleBlog key={post.id} post={post} t={t} />
          ))}
        </div>
        <div className={`mt-8 ${!show && "hidden"} `}>
          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
