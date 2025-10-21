"use client";

import { useLocale } from "next-intl";

type TitleSectionProps = {
  title: string;
  subtitle: string;
  textColor?: string | undefined;
};

const TitleSection = ({ title, subtitle, textColor }: TitleSectionProps) => {
  const locale = useLocale();
  return (
    <>
      <div className="relative flex items-center mb-5">
        <div
          className={`absolute ${
            locale === "en" ? "left-0" : "right-0"
          } top-0 bottom-0 flex items-center  gap-x-1`}
        >
          <div className="h-[15px] flex items-center w-[2px] bg-primary"></div>
          <div className="h-[20px] w-[2px] bg-primary"></div>
          <div className="h-[15px] flex items-center w-[2px] bg-primary"></div>
        </div>
        <span
          className={`text-primary uppercase ${
            locale === "en" ? "pl-8" : "pr-8"
          } font-bold`}
        >
          {title}
        </span>
      </div>
      <h2
        className={`${
          textColor ?? "text-secondary"
        } text-2xl md:text-3xl lg:text-4xl font-bold`}
      >
        {subtitle}
      </h2>
    </>
  );
};

export default TitleSection;
