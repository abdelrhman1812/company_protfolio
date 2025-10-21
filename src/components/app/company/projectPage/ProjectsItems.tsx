import { projects } from "@/data/mock-projects";
import { useTranslations } from "next-intl";
import SingleProject from "./SingleProject";

const ProjectsItems = () => {
  const t = useTranslations("ProjectPage");

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
        {projects(t).map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </section>
    </>
  );
};

export default ProjectsItems;
