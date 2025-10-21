import { StatisticsType } from "@/lib/types";

export const statistics = (t: (key: string) => string): StatisticsType[] => [
  {
    id: 1,
    num: 50,
    mount: "+",
    title: t("data.0.title"),
  },
  {
    id: 2,
    num: 50,
    mount: "K",
    title: t("data.1.title"),
  },
  {
    id: 3,
    num: 30,
    mount: "+",
    title: t("data.2.title"),
  },
  {
    id: 4,
    num: 5,
    mount: "+",
    title: t("data.3.title"),
  },
];
