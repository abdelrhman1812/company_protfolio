import { workingChallenge } from "@/data/mock-services";
import { CircleCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AccordionQuestion from "../../HomePage/AccordionQuestion";

const WorkingChallenge = () => {
  const t = useTranslations("Services.ServicesDetails");

  return (
    <section className="my-5">
      <h3 className="text-2xl my-5 font-semibold text-secondary md:text-4xl">
        {t("working_challenge.title")}
      </h3>

      <p className="mb-5 text-lightGray leading-7">
        {t("working_challenge.description")}
      </p>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-5">
        <div className="min-w-[max-content]">
          <Image
            src={"/Image/Services/servicesdetails/details-thumb-1.jpg"}
            width={200}
            height={200}
            alt="Image"
            className="rounded-lg w-full object-cover"
            quality={100}
          />
        </div>

        <div>
          <p className="text-secondary font-bold mb-3  leading-7">
            {t("working_challenge.sub_description")}
          </p>
          <ul className="space-y-3">
            {workingChallenge(t).map((challenge, index) => (
              <li key={index} className="flex gap-3">
                <CircleCheck className="text-primary" />
                <span className="text-lg text-lightGray leading-7">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="my-5 text-lightGray leading-7">
        {t("working_challenge.sub_description")}
      </p>
    </section>
  );
};

export default WorkingChallenge;

<AccordionQuestion />;
