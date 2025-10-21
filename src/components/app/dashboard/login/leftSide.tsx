"use client";
import { useTranslations } from "next-intl";

const LeftSide = () => {
  const t = useTranslations("leftSide");

  return (
    <div
      className="relative flex flex-col justify-center px-10 py-16 text-white bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom right,
            hsl(var(--primary) / 0.9),
            hsl(var(--primary) / 0.7)
          ), url('/Image/Services/servicesdetails/details-thumb-1.jpg')`,
      }}
    >
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl font-bold mb-6 leading-tight">{t("title")}</h1>
        <p className="text-lg text-gray-300 mb-10">{t("subtitle")}</p>
        <div className="h-[2px] w-24 bg-primary mb-4"></div>
        <p className="text-sm text-gray-400">{t("features")}</p>
      </div>
      <div className="absolute bottom-4 left-6 text-xs text-gray-400">
        {t("copyright")}
      </div>
    </div>
  );
};

export default LeftSide;
