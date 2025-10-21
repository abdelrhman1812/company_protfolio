import HeroPage from "@/components/common/HeroPage/HeroPage";
import { useTranslations } from "next-intl";

const BlogDetailsHero = () => {
  const t = useTranslations("Nav");
  return (
    <>
      <HeroPage
        title={t("blogs")}
        imageUrl="/Image/About/hero.png"
        height="50vh"
        textColor="white"
        path="/blogs/1"
      />
    </>
  );
};

export default BlogDetailsHero;
