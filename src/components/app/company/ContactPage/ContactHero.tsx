import HeroPage from "@/components/common/HeroPage/HeroPage";
import { useTranslations } from "next-intl";
import React from "react";

const ContactHero: React.FC = () => {
  const t = useTranslations("Nav");

  return (
    <HeroPage
      title={t("contact")}
      imageUrl="/Image/About/hero.png"
      height="50vh"
      textColor="white"
      path="/contact"
    />
  );
};

export default ContactHero;
