"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import MobileSidebar from "./MobileSidebar";
import { SelectLanguage } from "./SelectLanguage";

const navItems = [
  { text: "home", href: "/" },
  { text: "about", href: "/about" },
  { text: "services", href: "/services" },
  { text: "projects", href: "/projects" },
  { text: "blogs", href: "/blogs" },
  { text: "contact", href: "/contact" },
  {
    text: "pages",
    dropdownItems: [
      { text: "blog_details", href: "/blogs/1" },
      { text: "services_details", href: "/services/1" },
      { text: "project_details", href: "/projects/1" },
      { text: "team", href: "/teams" },
      { text: "team_details", href: "/teams/1" },
      { text: "pricing", href: "/pricing" },
      { text: "faq", href: "/faq" },
    ],
  },
];
const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = useTranslations();

  return (
    <div className="relative container">
      <nav
        className={`container z-40 ${
          isFixed ? "fixed shadow" : "absolute"
        } top-0 left-1/2 translate-x-[-50%] bg-white px-2 md:px-12 py-6 border-l-8 border-r-8 border-primary rounded flex justify-between items-center`}
      >
        <ul className="gap-4 hidden md:flex">
          {navItems.map((item) =>
            item.dropdownItems ? (
              <DropdownMenu key={item.text}>
                <DropdownMenuTrigger className="font-bold flex outline-none items-center text-secondary cursor-pointer">
                  {t(`Nav.${item.text}`)}
                  <ChevronDown className="h-5 w-5 font-bold" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white w-[200px] absolute -left-[70px] top-[28px] border border-gray-200 rounded shadow-lg">
                  {item.dropdownItems.map((dropdownItem) => (
                    <DropdownMenuItem key={dropdownItem.text}>
                      <Link
                        className="hover:bg-primary w-full py-1 px-2 rounded-sm hover:text-white"
                        href={dropdownItem.href}
                      >
                        {t(`Nav.${dropdownItem.text}`)}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <li key={item.text}>
                <Link href={item.href} className="font-bold text-secondary">
                  {t(`Nav.${item.text}`)}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="block md:hidden">
          <Logo />
        </div>
        {/* Actions */}
        <div className="flex items-center gap-5">
          <MobileSidebar />
          <SelectLanguage />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
