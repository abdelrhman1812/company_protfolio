import HeroPage from "@/components/common/HeroPage/HeroPage";
import { useTranslations } from "next-intl";
import React from "react";

const AboutHero: React.FC = () => {
  const t = useTranslations("Nav");
  return (
    <HeroPage
      title={t("about")}
      imageUrl="/Image/About/hero.png"
      height="50vh"
      textColor="white"
      path="/about"
    />
  );
};

export default AboutHero;
