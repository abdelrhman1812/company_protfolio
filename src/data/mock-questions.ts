import { QuestionsItems } from "@/lib/types";

export const questionsItems = (
  t: (key: string) => string
): QuestionsItems[] => [
  {
    id: 1,
    title: t("questionsItems.0.title"),
    description: t("questionsItems.0.description"),
  },
  {
    id: 2,
    title: t("questionsItems.1.title"),
    description: t("questionsItems.1.description"),
  },
  {
    id: 3,
    title: t("questionsItems.2.title"),
    description: t("questionsItems.2.description"),
  },
];
