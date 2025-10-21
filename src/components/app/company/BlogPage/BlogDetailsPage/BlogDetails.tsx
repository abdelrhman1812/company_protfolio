import AddComment from "./AddComment";
import BlogAuthor from "./BlogAuthor";
import BlogComments from "./BlogComments";
import BlogDetailsContent from "./BlogDetailsContent";
import BlogTags from "./BlogTags";

const BlogDetails = () => {
  return (
    <section className="mt-20 ">
      <div className="container">
        <div className="w-full md:max-w-[860px] mx-auto ">
          <BlogDetailsContent />
          <BlogTags />
          <BlogAuthor />
          <BlogComments />
          <AddComment />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
