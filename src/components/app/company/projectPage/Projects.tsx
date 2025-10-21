import TitleSection from "@/components/common/TitleSection/TitleSection";
import { useTranslations } from "next-intl";
import ProjectsItems from "./ProjectsItems";

const Projects = () => {
  const t = useTranslations("ProjectPage");

  return (
    <>
      <section className="py-[120px] ">
        <div className="container">
          <div className="flex justify-center flex-col items-center">
            <TitleSection
              title={t("title_section.title")}
              subtitle={t("title_section.subtitle")}
            />
          </div>
          <ProjectsItems />
        </div>
      </section>
    </>
  );
};

export default Projects;
