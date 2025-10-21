import { NavItemType, typeT } from "@/lib/types";

export const navigationMobile = (t: typeT): NavItemType[] => [
  {
    title: t("navigationMobile.0.title"),
    href: "/",
  },
  {
    title: t("navigationMobile.1.title"),
    href: "/about",
  },
  {
    title: t("navigationMobile.2.title"),
    href: "/services",
    children: [
      {
        title: t("navigationMobile.2.children.0.title"),
        href: "/services/1",
      },
    ],
  },
  {
    title: t("navigationMobile.3.title"),
    href: "/projects",
    children: [
      {
        title: t("navigationMobile.3.children.0.title"),
        href: "/projects/1",
      },
    ],
  },
  {
    title: t("navigationMobile.4.title"),
    href: "/blog",
    children: [
      {
        title: t("navigationMobile.4.children.0.title"),
        href: "/blogs",
      },
    ],
  },
  {
    title: t("navigationMobile.5.title"),
    href: "/pages",
    children: [
      {
        title: t("navigationMobile.5.children.0.title"),
        href: "/teams",
      },
      {
        title: t("navigationMobile.5.children.1.title"),
        href: "/teams/1",
      },
      {
        title: t("navigationMobile.5.children.2.title"),
        href: "/pages/faq",
      },
      {
        title: t("navigationMobile.5.children.3.title"),
        href: "/pricing",
      },
    ],
  },
  {
    title: t("navigationMobile.6.title"),
    href: "/contact",
  },
];
