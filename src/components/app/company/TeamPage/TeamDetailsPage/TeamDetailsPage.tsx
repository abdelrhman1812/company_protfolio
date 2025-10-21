import { TeamProfile } from "@/lib/types";
import TeamHero from "../TeamHero";
import TeamMember from "./TeamMember";

const TeamDetailsPage = ({
  userName,
  teamMember,
}: {
  userName: string;
  teamMember: TeamProfile;
}) => {
  return (
    <>
      <TeamHero title={userName} />
      <div className="container">
        <TeamMember teamMember={teamMember} />
      </div>
    </>
  );
};

export default TeamDetailsPage;
