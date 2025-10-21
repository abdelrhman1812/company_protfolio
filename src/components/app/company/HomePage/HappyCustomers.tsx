"use client";

import TitleSection from "@/components/common/TitleSection/TitleSection";
import { statistics } from "@/data/mock-Statistics";
import { useTranslations } from "next-intl";
import SingleCustomer from "./SingleCustomer";

const HappyCustomers = () => {
  const t = useTranslations("HomePage.Statistics");

  return (
    <section className="py-[120PX] ">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <TitleSection title={t("title")} subtitle={t("subTitle")} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-[100px]">
          {statistics(t).map((customer) => (
            <SingleCustomer key={customer.id} customer={customer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
