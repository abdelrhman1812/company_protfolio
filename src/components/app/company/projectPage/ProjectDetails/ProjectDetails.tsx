import Image from "next/image";
import ProjectHero from "../ProjectHero";
import ChallengeOfProject from "./ChallengeOfProject";
import ClientProjectDetails from "./ClientProjectDetails";
import Planing from "./Planing";

const ProjectDetails = ({ projectName }: { projectName: string }) => {
  return (
    <>
      <ProjectHero title={projectName} />
      <div className="container   py-[120px]">
        {/* Project Details */}

        <div className="flex justify-center h-[500px]">
          <Image
            src="/Image/Projects/Details/baner.jpg"
            width={1045}
            height={500}
            alt="project"
            className="shadow-lg rounded-xl object-cover"
          />
        </div>
        <div className=" w-full lg:w-[900px] lg:mx-auto">
          <ClientProjectDetails />
          <Planing />
          <ChallengeOfProject />
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
