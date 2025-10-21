import { TeamProfile } from "@/lib/types";

export const teams = (t: (key: string) => string): TeamProfile[] => [
  {
    id: 1,
    name: t("teamItems.0.name"),
    job: t("teamItems.0.job"),
    img: "/Image/Teams/team-3.png",  
    objective: t("teamItems.0.objective"),
    social: [
      {
        platform: t("teamItems.0.social.0.platform"),
        url: "https://www.linkedin.com/in/abdelrahmanali18/",
      },
      {
        platform: t("teamItems.0.social.1.platform"),
        url: "https://github.com/abdelrhman1812?tab=repositories",
      },
    ],
    personalInfo: {
      objective: t("teamItems.0.personalInfo.objective"),
      details: {
        phone: "01008034761",
        email: "abdelrhmanali1812@gmail.com",
        experiences: t("teamItems.0.personalInfo.details.experiences"),
        address: t("teamItems.0.personalInfo.details.address"),
      },
    },
    personalExperience: {
      objective: t("teamItems.0.personalExperience.objective"),
      items: [
        {
          percentage: 80,
          name: t("teamItems.0.personalExperience.items.0.name"),
        },
        {
          percentage: 90,
          name: t("teamItems.0.personalExperience.items.1.name"),
        },
        {
          percentage: 70,
          name: t("teamItems.0.personalExperience.items.2.name"),
        },
      ],
    },
  },
  {
    id: 2,
    name: t("teamItems.1.name"),
    job: t("teamItems.1.job"),
    img: "/Image/Teams/team-1.png",
    objective: t("teamItems.1.objective"),
    social: [
      {
        platform: t("teamItems.1.social.0.platform"),
        url: "https://www.linkedin.com/in/abdelrahmanali18/",
      },
      {
        platform: t("teamItems.1.social.1.platform"),
        url: "https://github.com/abdelrhman1812?tab=repositories",
      },
    ],
    personalInfo: {
      objective: t("teamItems.1.personalInfo.objective"),
      details: {
        phone: "01008034761",
        email: "ali@gmail.com",
        experiences: t("teamItems.1.personalInfo.details.experiences"),
        address: t("teamItems.1.personalInfo.details.address"),
      },
    },
    personalExperience: {
      objective: t("teamItems.1.personalExperience.objective"),
      items: [
        {
          percentage: 80,
          name: t("teamItems.1.personalExperience.items.0.name"),
        },
        {
          percentage: 90,
          name: t("teamItems.1.personalExperience.items.1.name"),
        },
        {
          percentage: 70,
          name: t("teamItems.1.personalExperience.items.2.name"),
        },
      ],
    },
  },
  {
    id: 3,
    name: t("teamItems.2.name"),
    job: t("teamItems.2.job"),
    img: "/Image/Teams/team-3.png",
    objective: t("teamItems.2.objective"),
    social: [
      {
        platform: t("teamItems.2.social.0.platform"),
        url: "https://www.linkedin.com/in/abdelrahmanali18/",
      },
      {
        platform: t("teamItems.2.social.1.platform"),
        url: "https://github.com/abdelrhman1812?tab=repositories",
      },
    ],
    personalInfo: {
      objective: t("teamItems.2.personalInfo.objective"),
      details: {
        phone: "01008034761",
        email: "ahmed@gmail.com",
        experiences: t("teamItems.2.personalInfo.details.experiences"),
        address: t("teamItems.2.personalInfo.details.address"),
      },
    },
    personalExperience: {
      objective: t("teamItems.2.personalExperience.objective"),
      items: [
        {
          percentage: 80,
          name: t("teamItems.2.personalExperience.items.0.name"),
        },
        {
          percentage: 90,
          name: t("teamItems.2.personalExperience.items.1.name"),
        },
        {
          percentage: 70,
          name: t("teamItems.2.personalExperience.items.2.name"),
        },
      ],
    },
  },
];
