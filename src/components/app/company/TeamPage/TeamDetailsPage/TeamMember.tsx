import { TeamProfile } from "@/lib/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import AboutUsProgress from "../../AboutPage/About-us-progress";

const TeamMember = ({ teamMember }: { teamMember: TeamProfile }) => {
  const t = useTranslations("HomePage");
  return (
    <section className="flex flex-col md:flex-row gap-5 py-[60px] px-0 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="flex flex-col items-center p-5 w-full md:max-w-[522px] shadow-lg rounded-lg bg-white">
        <Image
          src={teamMember.img}
          alt={teamMember.name}
          width={460}
          height={475}
          className="rounded-lg w-full object-cover max-w-[460px]"
        />
        {/* Member Details */}
        <div className="flex flex-col items-center gap-y-4 mt-5 text-center">
          <h2 className="text-secondary text-2xl md:text-3xl font-bold">
            {teamMember.name}
          </h2>
          <p className="text-lightGray text-sm">{teamMember.job}</p>
          <p className="text-lightGray leading-7 text-sm">
            {teamMember.objective}
          </p>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 my-5">
          {[
            TiSocialFacebook,
            TiSocialGithub,
            TiSocialLinkedin,
            TiSocialTwitter,
            TiSocialYoutube,
          ].map((Icon, idx) => (
            <div
              key={idx}
              className="border border-primary p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
            >
              <Icon size={25} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 py-5">
        {/* Personal Info */}
        <h3 className="text-secondary text-2xl md:text-3xl font-bold mb-5">
          {t("Teams.personalInfo")}
        </h3>
        <p className="text-lightGray leading-7">
          {teamMember.personalInfo?.objective}
        </p>

        <div className="my-5 flex flex-col md:flex-row gap-y-5 md:gap-x-10">
          <ul className="space-y-3">
            <li className="flex flex-col md:flex-row gap-x-2 items-start md:items-center">
              <p className="font-semibold text-secondary">
                {t("Teams.phone")} :{" "}
              </p>
              <span className="text-lightGray">
                {teamMember.personalInfo?.details.phone}
              </span>
            </li>
            <li className="flex flex-col md:flex-row gap-x-2 items-start md:items-center">
              <p className="font-semibold text-secondary">
                {t("Teams.email")} :
              </p>
              <span className="text-lightGray">
                {teamMember.personalInfo?.details.email}
              </span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex flex-col md:flex-row gap-x-2 items-start md:items-center">
              <p className="font-semibold text-secondary">
                {t("Teams.experience")} :
              </p>
              <span className="text-lightGray">
                {teamMember.personalInfo?.details.experiences}
              </span>
            </li>
            <li className="flex flex-col md:flex-row gap-x-2 items-start md:items-center">
              <p className="font-semibold text-secondary">
                {t("Teams.address")} :
              </p>
              <span className="text-lightGray">
                {teamMember.personalInfo?.details.address}
              </span>
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="border-t border-gray-200 py-5">
          <h3 className="text-secondary text-2xl md:text-3xl font-bold mb-5">
            {t("Teams.personalExperience")}
          </h3>
          <p className="text-lightGray leading-7">
            {teamMember.personalExperience?.objective}
          </p>
          <div className=" mt-4">
            {teamMember.personalExperience?.items.map((item, index) => (
              <AboutUsProgress
                key={index}
                value={item.percentage}
                title={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
