import { CircleCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ChallengeOfProject = () => {
  const t = useTranslations("ProjectPage.projectDetails.challengeOfProject");

  const challenges = [
    t("challenges.0"),
    t("challenges.1"),
    t("challenges.2"),
    t("challenges.3"),
    t("challenges.4"),
    t("challenges.5"),
  ];

  return (
    <div className="my-5">
      {/* Title */}
      <h3 className="text-secondary font-bold mb-5 text-xl md:text-2xl">
        {t("title")}
      </h3>

      {/* Paragraph */}
      <p className="text-lg text-lightGray leading-7">{t("paragraph1")}</p>

      {/* Challenges List */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 my-5">
        {challenges.map((challenge, index) => (
          <li key={index} className="flex gap-3">
            <CircleCheck className="text-primary" />
            <span className="text-lg text-lightGray leading-7">
              {challenge}
            </span>
          </li>
        ))}
      </ul>

      {/* Second Paragraph */}
      <p className="text-lg text-lightGray leading-7">{t("paragraph2")}</p>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        {["chall_1.jpg", "chall_1.jpg"].map((image, index) => (
          <Image
            key={index}
            src={`/Image/Projects/Details/${image}`}
            width={530}
            height={500}
            alt="Project"
            className="rounded-md w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengeOfProject;
