import FinanceStrategyService from "@/components/app/company/ServicesPage/servicesDetails/FinanceStrategyService";
import WorkingChallenge from "@/components/app/company/ServicesPage/servicesDetails/WorkingChallenge";
import HeroPage from "@/components/common/HeroPage/HeroPage";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Services.ServicesDetails");
  return (
    <main className="overflow-hidden">
      <HeroPage
        title={t("title")}
        imageUrl="/Image/About/hero.png"
        height="50vh"
        textColor="white"
        path="/services/1"
      />
      <section className="mt-20 ">
        <div className="container">
          <div className="w-full md:max-w-[860px] mx-auto ">
            <FinanceStrategyService />
            <WorkingChallenge />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
