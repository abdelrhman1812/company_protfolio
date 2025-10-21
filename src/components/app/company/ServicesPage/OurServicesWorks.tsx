import TitleSection from "@/components/common/TitleSection/TitleSection";
import { useTranslations } from "next-intl";
import WorksItems from "./WorksItems";
interface OurServicesWorksProps {
  background?: string;
}

const OurServicesWorks = ({ background }: OurServicesWorksProps) => {
  const t = useTranslations("HomePage.OurWorks");
  return (
    <section
      style={{
        background: background,
      }}
      className="py-[120px] "
    >
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <TitleSection title={t("title")} subtitle={t("subTitle")} />
        </div>
        <WorksItems />
      </div>
    </section>
  );
};

export default OurServicesWorks;
