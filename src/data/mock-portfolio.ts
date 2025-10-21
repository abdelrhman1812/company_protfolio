import { PortfolioType } from "@/lib/types";

export const portfolioItems = (t: (key: string) => string): PortfolioType[] => [
  {
    img: "/Image/Projects/electronic.png",
    title: t("portfolioItems.0.title"),
    jobTitle: t("portfolioItems.0.jobTitle"),
  },
  {
    img: "/Image/Projects/eyemakers.png",
    title: t("portfolioItems.1.title"),
    jobTitle: t("portfolioItems.1.jobTitle"),
  },
  {
    img: "/Image/Projects/courses_platform.png",
    title: t("portfolioItems.2.title"),
    jobTitle: t("portfolioItems.2.jobTitle"),
  },
  {
    img: "/Image/Projects/dentist.png",
    title: t("portfolioItems.3.title"),
    jobTitle: t("portfolioItems.3.jobTitle"),
  },
  {
    img: "/Image/Projects/Online_shop.png",
    title: t("portfolioItems.4.title"),
    jobTitle: t("portfolioItems.4.jobTitle"),
  },
  {
    img: "/Image/Projects/software.png",
    title: t("portfolioItems.5.title"),
    jobTitle: t("portfolioItems.5.jobTitle"),
  },
   {
    img: "/Image/Projects/Moltaqa.png",
    title: t("portfolioItems.5.title"),
    jobTitle: t("portfolioItems.5.jobTitle"),
  },
];
