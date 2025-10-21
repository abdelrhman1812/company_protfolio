import { useTranslations } from "next-intl";
import Link from "next/link";

const OurServicesFoot = () => {
  const t = useTranslations("");

  return (
    <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
      <p className="text-lightGray text-center sm:text-left">
        {t("successMessage")}
      </p>
      <Link href={"/"}>
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <span className="text-lightGray"> {t("learnMore")}</span>
          <span className="text-primary font-semibold"> {t("clickHere")}</span>
        </div>
      </Link>
    </div>
  );
};

export default OurServicesFoot;
