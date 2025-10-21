import { ItemsType } from "@/lib/types";

export const ourWorksItems = (t: (key: string) => string): ItemsType[] => [
  {
    id: 1,
    img: "/Image/Services/planning.jpg",
    title: t("ourWorks.0.title"),
    description: t("ourWorks.0.description"),
  },
  {
    id: 2,
    img: "/Image/Services/dev.jpg",
    title: t("ourWorks.1.title"),
    description: t("ourWorks.1.description"),
  },
  {
    id: 3,
    img: "/Image/Services/delivery.jpg",
    title: t("ourWorks.2.title"),
    description: t("ourWorks.2.description"),
  },
];
