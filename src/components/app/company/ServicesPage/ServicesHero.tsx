import HeroPage from "@/components/common/HeroPage/HeroPage";
import { useTranslations } from "next-intl";

const ServicesHero = () => {
  const t = useTranslations("Nav");

  return (
    <HeroPage
      title={t("services")}
      imageUrl="/Image/About/hero.png"
      height="50vh"
      textColor="white"
      path="/services"
    />
  );
};

export default ServicesHero;
