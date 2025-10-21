import LatestNews from "../HomePage/LatestNews";
import BlogHero from "./BlogHero";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <LatestNews show={true} />
    </>
  );
}
