import { servicesItem, typeT } from "@/lib/types";

export const servicesItems = (t: (key: string) => string): servicesItem[] => [
  {
    id: 1,
    img: "/Image/Services/icon_1.svg",
    title: t("HomePage.Services.services.0.title"),
    description: t("HomePage.Services.services.0.description"),
    num: "/Image/Services/icon-01.png",
  },
  {
    id: 2,
    img: "/Image/Services/icon_2.svg",
    title: t("HomePage.Services.services.1.title"),
    description: t("HomePage.Services.services.1.description"),
    num: "/Image/Services/icon-02.png",
  },
  {
    id: 3,
    img: "/Image/Services/icon_3.svg",
    title: t("HomePage.Services.services.2.title"),
    description: t("HomePage.Services.services.2.description"),
    num: "/Image/Services/icon-03.png",
  },
];

export const challenges = (t: typeT): string[] => [
  t("ServicesDetails.challenges.0"),
  t("ServicesDetails.challenges.1"),
  t("ServicesDetails.challenges.2"),
  t("ServicesDetails.challenges.3"),
];

export const workingChallenge = (t: typeT): string[] => [
  t("working_challenge.data.0"),
  t("working_challenge.data.1"),
  t("working_challenge.data.2"),
  t("working_challenge.data.3"),
  t("working_challenge.data.4"),
  t("working_challenge.data.5"),
];
