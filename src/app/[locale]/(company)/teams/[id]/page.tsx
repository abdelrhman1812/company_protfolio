import TeamDetailsPage from "@/components/app/company/TeamPage/TeamDetailsPage/TeamDetailsPage";
import { teams } from "@/data/mock-teams";
import { TeamProfile } from "@/lib/types";
import { getTranslations } from "next-intl/server";

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const t = await getTranslations("HomePage.Teams");
  const teamId = (await params).id;
  const teamMember = teams(t).find((team) => team.id === Number(teamId));
  const userName = teamMember?.name || "";

  return (
    <main className="overflow-hidden">
      <TeamDetailsPage
        userName={userName}
        teamMember={teamMember || ({} as TeamProfile)}
      />
    </main>
  );
};

export default Page;
