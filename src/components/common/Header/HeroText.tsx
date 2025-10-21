import { useTranslations } from "next-intl";
import PlayBtn from "../PlayBtn/PlayBtn";

const HeroText = () => {
  const t = useTranslations("HomePage");

  return (
    <>
      <section className="flex flex-col gap-4 pt-20 relative space-y-5 z-20 w-full md:w-1/2">
        <span className="text-white text-base">
          {t("HeroSection.agencyName")}
        </span>
        <h1 className="text-white text-4xl md:text-6xl   font-bold">
          {t("HeroSection.headline")}
        </h1>
        <span className="text-white  text-lg">
          {t("HeroSection.description")}
        </span>
        <div className="flex items-center gap-x-4">
          <button className="w-44 h-12 text-base py-3 rounded bg-primary text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
            <span className="absolute bg-foreground w-48 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-foreground w-48 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            {t("HeroSection.buttonText")}
          </button>
          <div className="flex items-center gap-x-2">
            <PlayBtn bgColor="bg-white" textColor="text-primary" />
            <span className="text-sm text-white">
              {t("HeroSection.playVideo")}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroText;