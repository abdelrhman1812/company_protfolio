import ProjectDetails from "@/components/app/company/projectPage/ProjectDetails/ProjectDetails";
import { projects } from "@/data/mock-projects";
import { getTranslations } from "next-intl/server";
const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const t = await getTranslations("ProjectPage");
  const projectId = (await params).id;
  const project = projects(t).find(
    (project) => project.id === Number(projectId)
  );
  const projectName = project?.title || "";
  return (
    <main className="overflow-hidden">
      <ProjectDetails projectName={projectName} />
    </main>
  );
};

export default Page;
