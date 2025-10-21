import TitleSection from "@/components/common/TitleSection/TitleSection";
import { useTranslations } from "next-intl";
import TeamsItems from "./TeamsItems";

const Teams = () => {
  const t = useTranslations("HomePage.Teams");
  return (
    <section className="py-[120px] ">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <TitleSection title={t("title")} subtitle={t("subTitle")} />
          <TeamsItems />
        </div>
      </div>
    </section>
  );
};

export default Teams;
