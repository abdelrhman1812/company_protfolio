"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import Form from "./Form";
import FormHead from "./FormHead";
import SocialLinks from "./SocialLinks";
const FormContact = () => {
  const locale = useLocale();
  const t = useTranslations("");
  return (
    <div className="container mx-auto px-4 py-12 relative">
      {/* overlay */}
      <div
        className={`overlay absolute top-5 left-50 transform -z-10 ${
          locale === "ar" ? "-translate-x-1/2" : "translate-x-1/2"
        } translate-y-1/2`}
      >
        <Image
          src={"/Image/Contact/bg.png"}
          width={760}
          height={362}
          alt="bg"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 ">
        {/* Left Column */}
        <div className="">
          <FormHead t={t} />
          <ContactInfo t={t} />
          <SocialLinks />
        </div>

        {/* Right Column */}
        <Form t={t} />
      </div>
    </div>
  );
};

export default FormContact;
