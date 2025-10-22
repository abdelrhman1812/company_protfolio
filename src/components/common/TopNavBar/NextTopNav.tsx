import { useTranslations } from "next-intl";
import Logo from "../Logo/Logo";
import HelpNeeded from "./HelpNeeded";
import Link from "next/link";
import { useLocale } from "next-intl";

const NextTopNav = () => {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <section className="bg-white py-5 hidden md:block">
      <div className="container flex justify-between items-center">
        <Logo />
        <HelpNeeded />
        <Link
          href={`/${locale}/auth/login`}
          className=" py-3 px-4 w-48 h-12  text-center text-base block  rounded bg-primary text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
        >
          <span className="absolute bg-foreground w-48 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left- -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
          <span className="absolute bg-foreground w-48 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
          {t("BtnConsulting")}
        </Link>
      </div>
    </section>
  );
};

export default NextTopNav;
