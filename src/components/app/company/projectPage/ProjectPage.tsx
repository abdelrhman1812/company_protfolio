import { useTranslations } from "next-intl";
import ProjectHero from "./ProjectHero";
import Projects from "./Projects";

const ProjectPage = () => {
  const t = useTranslations("ProjectPage");
  return (
    <>
      <ProjectHero title={t("title_section.title")} />
      <Projects />
    </>
  );
};

export default ProjectPage;
