import { teams } from "@/data/mock-teams";
import { useTranslations } from "next-intl";
import SingleTeam from "./SingleTeam";

const TeamsItems = () => {
  const t = useTranslations("HomePage.Teams");
  return (
    <section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 mt-8">
        {teams(t).map((team) => (
          <SingleTeam key={team.id} team={team} />
        ))}
      </section>
    </section>
  );
};

export default TeamsItems;
