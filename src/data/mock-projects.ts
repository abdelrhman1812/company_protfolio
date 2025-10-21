import { ProjectsType, typeT } from "@/lib/types";

export const projects = (t: typeT): ProjectsType[] => [
  {
    id: 1,
    title: t("projects.0.title"),
    type: t("projects.0.type"),
    img: "/Image/Projects/electronic.png",
    key: "HTML/CSS",
  },
  {
    id: 2,
    title: t("projects.1.title"),
    type: t("projects.1.type"),
    img: "/Image/Projects/eyemakers.png",
    key: "Website",
  },
  {
    id: 3,
    title: t("projects.2.title"),
    type: t("projects.2.type"),
    img: "/Image/Projects/courses_platform.png",
    key: "Dashboard",
  },
  {
    id: 4,
    title: t("projects.3.title"),
    type: t("projects.3.type"),
    img: "/Image/Projects/dentist.png",
    key: "Website",
  },
  {
    id: 5,
    title: t("projects.4.title"),
    type: t("projects.4.type"),
    img: "/Image/Projects/Online_shop.png",
    key: "Website",
  },
  {
    id: 6,
    title: t("projects.5.title"),
    type: t("projects.5.type"),
    img: "/Image/Projects/software.png",
    key: "Website",
  },
];
