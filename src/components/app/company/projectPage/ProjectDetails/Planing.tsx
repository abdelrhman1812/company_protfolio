import { useTranslations } from "next-intl";

const Planing = () => {
  const t = useTranslations("ProjectPage.projectDetails.planning");

  return (
    <div className="my-5">
      <h3 className="text-secondary font-bold mb-5 text-xl md:text-2xl">
        {t("title")}
      </h3>
      <p className="text-lg text-lightGray leading-7">{t("paragraph1")}</p>
      <p className="text-lg text-lightGray leading-7 my-5">
        <p className="text-lg text-lightGray leading-7">{t("paragraph2")}</p>
      </p>
    </div>
  );
};

export default Planing;
