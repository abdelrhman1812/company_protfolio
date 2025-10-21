import { challenges } from "@/data/mock-services";
import { CircleCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FinanceStrategyService = () => {
  const t = useTranslations("Services");

  return (
    <section>
      <Image
        src="/Image/Services/servicesdetails/details-large.webp"
        width={844}
        height={437}
        alt="Finance & Strategy Service"
        className="object-cover w-full rounded"
        quality={100}
      />

      <h3 className="text-2xl my-5 font-semibold text-secondary md:text-4xl">
        {t("ServicesDetails.title")}
      </h3>

      <p className="mb-5 text-lightGray leading-7">
        {t("ServicesDetails.description")}
      </p>

      {/* Challenges List */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 my-8">
        {challenges(t).map((challenge, index) => (
          <li key={index} className="flex gap-3">
            <CircleCheck className="text-primary" />
            <span className="text-lg text-lightGray leading-7">
              {challenge}
            </span>
          </li>
        ))}
      </ul>

      {/* Services Details */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 my-8">
        {/* Business Growth */}
        <div className="py-10 px-[30px] flex gap-5 items-start rounded-lg border border-primary bg-[#F6E8EA]">
          <div className="min-w-[max-content] ">
            <Image
              src="/Image/Services/servicesdetails/details-1.png"
              width={60}
              height={60}
              alt="Business Growth"
              className="min-w-[max-content]"
            />
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-secondary ">
              {t("ServicesDetails.details.0.title")}
            </h4>
            <p className="text-lightGray text-sm">
              {t("ServicesDetails.details.0.description")}
            </p>
          </div>
        </div>

        {/* Financial Planning */}
        <div className="py-10 px-[30px] flex gap-5 items-start rounded-lg border border-primary bg-[#F6E8EA]">
          <div className="min-w-[max-content] ">
            <Image
              src="/Image/Services/servicesdetails/details-2.png"
              width={60}
              height={60}
              alt="Financial Planning"
              className="min-w-[max-content]"
            />
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-secondary ">
              {t("ServicesDetails.details.1.title")}
            </h4>
            <p className="text-lightGray text-sm">
              {t("ServicesDetails.details.1.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceStrategyService;
