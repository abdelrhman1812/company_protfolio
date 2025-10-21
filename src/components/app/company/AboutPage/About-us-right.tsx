import TitleSection from "@/components/common/TitleSection/TitleSection";
import { DollarSign } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import OtherImg from "../../../../../public/Image/About/about-with-icon.png";
import AboutUsProgress from "./About-us-progress";

const AboutUsRight = () => {
  const t = useTranslations("HomePage.AboutUs");

  return (
    <div className="px-5 mt-10 md:m-0">
      <TitleSection title={t("title")} subtitle={t("subtitle")} />
      <p className="my-5 text-base text-lightGray leading-7">
        {t("description")}
      </p>

      {/* Progress */}
      <AboutUsProgress value={85} title={t("progress.decoration")} />
      <AboutUsProgress value={66} title={t("progress.renovation")} />

      {/* Other */}
      <div className="flex gap-2 items-center">
        <div className="relative">
          <Image src={OtherImg} height={80} width={80} alt="about" />
          <div className=" absolute top-[8px] left-[8px] right-[8px] bottom-[8px] flex items-center justify-center border border-white rounded-full ">
            <DollarSign className="  text-white" />
          </div>
        </div>

        <p className="text-secondary font-bold text-xl">{t("helping")}</p>
      </div>
    </div>
  );
};

export default AboutUsRight;
