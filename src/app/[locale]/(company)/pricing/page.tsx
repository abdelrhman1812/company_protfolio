import PricingSection from "@/components/app/company/PricingPage/PricingSection";
import HeroPage from "@/components/common/HeroPage/HeroPage";
import TitleSection from "@/components/common/TitleSection/TitleSection";
import { useTranslations } from "next-intl";

const PricingPage = () => {
  const t = useTranslations("PricingPage");
  const heroTitle = useTranslations("Nav");
  return (
    <main className="overflow-hidden">
      <HeroPage
        title={heroTitle("pricing")}
        imageUrl="/Image/About/hero.png"
        height="50vh"
        textColor="white"
        path="/pricing"
      />
      <section className="py-[120px] bg-[#CEE0F7]">
        <div className="container ">
          <div className="flex justify-center flex-col items-center">
            <TitleSection
              title={t("titleSection.title")}
              subtitle={t("titleSection.subtitle")}
            />
          </div>
          <PricingSection />
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
