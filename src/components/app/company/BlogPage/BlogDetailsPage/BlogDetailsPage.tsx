import BlogDetails from "./BlogDetails";
import BlogDetailsHero from "./BlogDetailsHero";

const BlogDetailsPage = () => {
  return (
    <main className="overflow-hidden">
      <BlogDetailsHero />
      <BlogDetails />
    </main>
  );
};

export default BlogDetailsPage;
