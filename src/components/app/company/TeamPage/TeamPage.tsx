import { useTranslations } from "next-intl";
import TeamHero from "./TeamHero";
import Teams from "./teams/Teams";

const TeamPage = () => {
  const t = useTranslations("Nav");

  return (
    <>
      <TeamHero title={t("team")} />
      <Teams />
    </>
  );
};

export default TeamPage;
