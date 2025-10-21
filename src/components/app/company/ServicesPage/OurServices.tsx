import TitleSection from "@/components/common/TitleSection/TitleSection";
import { useTranslations } from "next-intl";
import OurServicesFoot from "./OurServicesFoot";
import ServicesItems from "./ServicesItems";

const serviceStyle = {
  backgroundImage: "url('/Image/Services/services-bg-image.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const OurServices = () => {
  const t = useTranslations("HomePage.Services");

  return (
    <section style={serviceStyle} className="py-[120px] ">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <TitleSection title={t("title")} subtitle={t("subTitle")} />
        </div>
        <ServicesItems />
        <OurServicesFoot />
      </div>
    </section>
  );
};

export default OurServices;
