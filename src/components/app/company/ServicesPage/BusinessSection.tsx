import { useTranslations } from "next-intl";
import Image from "next/image";

const BusinessSection = () => {
  const t = useTranslations("Services.business_section");
  return (
    <section className="bg-[#03041C] py-[120px]">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <span className=" font-bold md:font-black text-primary mb-3">
              {t("header.title")}
            </span>
            <h2 className="text-white max-w-[480px]  font-bold md:font-black text-[24px] md:text-[36px]">
              {t("header.description")}{" "}
            </h2>
          </div>
          <div className="hidden md:flex  flex-col items-center gap-6">
            <span
              className="font-black text-2xl md:text-[48px] relative"
              style={{
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "2px white",
              }}
            >
              4M+
            </span>
            <span className="text-white ">
              {t("header.business_using_stripe")}
            </span>
          </div>
          <div className="hidden md:block">
            <Image
              src="/Image/Services/shape.png"
              width={170}
              height={122}
              alt="bizper"
            />
          </div>
        </div>
        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Image
              src="/Image/Services/plan.jpg"
              width={580}
              height={380}
              alt="bizper"
              className="rounded-lg w-full"
              priority
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            <div
              style={{
                background:
                  "linear-gradient(to bottom left, #122630 0%, #161a2e 21.52%, #03041c 46.75%, #03041c 61.57%, #2e1b28 100%)",
              }}
              className="p-[30px] border border-gray-50/5   flex flex-col rounded-lg items-center justify-center"
            >
              <svg
                width="70"
                height="70"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 44H48M16 44V36H48V44M16 44V52H48V44M32 36V28M24 28H40M32 20C29.7909 20 28 18.2091 28 16C28 13.7909 29.7909 12 32 12C34.2091 12 36 13.7909 36 16C36 18.2091 34.2091 20 32 20Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className=" text-white font-bold text-2xl mt-[13px]">
                {t("cards.0.title")}
              </h3>
              <p className=" leading-6 text-white text-center mt-[16px]">
                {t("cards.0.description")}
              </p>
            </div>
            {/* Items */}
            <div className="space-y-3 flex flex-col justify-between">
              {/* Item */}
              <div
                style={{
                  background:
                    "linear-gradient(to bottom left, #122630 0%, #161a2e 21.52%, #03041c 46.75%, #03041c 61.57%, #2e1b28 100%)",
                }}
                className="p-[30px] flex flex-col border border-gray-50/5 rounded-lg items-center justify-center"
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 44H40M28 52H36M16 8H48C50.2091 8 52 9.79086 52 12V36C52 38.2091 50.2091 40 48 40H16C13.7909 40 12 38.2091 12 36V12C12 9.79086 13.7909 8 16 8Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className=" text-white font-bold text-2xl mt-5">
                  {t("cards.1.title")}{" "}
                </h3>
              </div>
              {/* Item */}
              <div
                style={{
                  background:
                    "linear-gradient(to bottom left, #122630 0%, #161a2e 21.52%, #03041c 46.75%, #03041c 61.57%, #2e1b28 100%)",
                }}
                className="p-[30px] flex flex-col border border-gray-50/5 rounded-lg items-center justify-center"
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 16V32L40 40M56 32C56 45.2548 45.2548 56 32 56C18.7452 56 8 45.2548 8 32C8 18.7452 18.7452 8 32 8C45.2548 8 56 18.7452 56 32Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className=" text-white font-bold text-2xl mt-5">
                  {t("cards.2.title")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
