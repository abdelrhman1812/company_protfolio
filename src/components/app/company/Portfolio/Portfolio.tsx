import TitleSection from "@/components/common/TitleSection/TitleSection";
import { useTranslations } from "next-intl";
import OurPortfolio from "./OurPortfolio";

const portfolioStyle = {
  backgroundImage: "url('/Image/portfolio/bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Portfolio = () => {
  const t = useTranslations("HomePage.Portfolio");
  return (
    <section style={portfolioStyle} className="py-[120px]  h-[50vh] relative ">
      <div className="container  mb-48">
        <div className="flex justify-center flex-col items-center">
          <TitleSection
            title={t("title")}
            subtitle={t("subTitle")}
            textColor="text-white"
          />
        </div>
      </div>
      <OurPortfolio />
    </section>
  );
};

export default Portfolio;
