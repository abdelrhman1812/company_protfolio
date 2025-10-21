import { StaticImageData } from "next/image";

export interface NavItemType {
  title: string;
  href: string;
  children?: NavItemType[];
}

export interface BlogPost {
  id: string;
  date: {
    day: number;
    month: string;
  };
  image: string;
  author: string;
  category: string;
  title: string;
  excerpt: string;
  slug: string;
}

export interface RecentPost {
  id: string;
  date: string;
  title: string;
  image: string;
}

export interface QuickLink {
  title: string;
  href: string;
}

export interface CommentsTypes {
  id: number;
  comment: string;
  rate: number;
  data: string;
  author: {
    name: string;
    img: string | StaticImageData;
  };
}

export interface FormValues {
  name: string;
  email: string;
  website: string;
  comment: string;
}

/* Teams */

export interface SocialLink {
  platform: string;
  url: string;
}

interface PersonalInfo {
  objective: string;
  details: {
    phone: string;
    email: string;
    experiences: string;
    address: string;
  };
}

interface PersonalExperience {
  objective: string;
  items: { percentage: number; name: string }[];
}

export interface TeamProfile {
  id: number;
  name: string;
  job: string;
  img: string;
  objective: string;
  social: SocialLink[];
  personalInfo: PersonalInfo;
  personalExperience: PersonalExperience;
}

/* Projects */

export interface ProjectsType {
  id: number;
  title: string;
  type: string;
  key: string;
  img: string;
}

/* Sharded */
export interface ItemsType {
  id: number;
  title: string;
  description: string;
  img: StaticImageData | string;
}
/* Services */

export interface servicesItem extends ItemsType {
  num: StaticImageData | string;
}

/* Portfolio */

export interface PortfolioType {
  title: string;
  jobTitle: string;
  img: StaticImageData | string;
}

/* Questions and Answers */

export type QuestionsItems = Omit<ItemsType, "img">;

/* Statistics */

export interface StatisticsType {
  id: number;
  num: number;
  mount: string;
  title: string;
}

/* Testimonials */

export interface TestimonialsType {
  rating: number;
  text: string;
  name: string;
  role: string;
  image: string;
}

/* Contact */
export type typeT = (key: string) => string;

/* pricing */

export interface PlanFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: number;
  features: PlanFeature[];
}
