import { ProjectsType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaProjectDiagram } from "react-icons/fa";

const SingleProject = ({ project }: { project: ProjectsType }) => {
  return (
    <div className="p-2">
      <div className="p-8 shadow-md rounded-lg hover:shadow-lg transition duration-300">
        {/* Project Image */}

        <div className="relative sm:h-[180px] overflow-hidden">
          <Image
            src={project.img}
            alt={project.title}
            width={400}
            height={180}
            className="w-full  object-cover rounded-lg"
          />
        </div>

        {/* Project Type */}
        <Link
          className="flex items-center mt-3 text-lightGray gap-x-2"
          href={`/projects/${project.id}`}
        >
          <FaProjectDiagram className="text-primary" />
          <p className="leading-7">{project.type}</p>
        </Link>

        {/* Project Title */}
        <h2 className="text-xl font-bold my-2 flex items-center gap-x-2">
          {project.title}
        </h2>

        {/* Project Links */}
        <div className="flex gap-x-4 mt-4">
          <Link
            href={"/projects"}
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-x-1"
          >
            <FaGlobe />
            <span>Demo</span>
          </Link>
          {/* <Link
            href={"/projects"}
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-x-1"
          >
            <FaCode />
            <span>Code</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
