import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { typeT } from "@/lib/types";
import { useLocale } from "next-intl";
import FormHead from "./FormHead";

const Form = ({ t }: { t: typeT }) => {
  const locale = useLocale();
  return (
    <>
      <div className="">
        <FormHead t={t} />

        <form className=" flex flex-col gap-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              placeholder={t("form.placeholders.name")}
              className={`bg-[#EFF0F6]  outline-none focus:border-primary py-4 ${
                locale === "ar" ? "pr-8" : "pl-8"
              } rounded-md `}
            />
            <input
              placeholder={t("form.placeholders.phone")}
              className={`bg-[#EFF0F6] outline-none focus:border-primary py-4 ${
                locale === "ar" ? "pr-8" : "pl-8"
              } rounded-md`}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder={t("form.placeholders.email")}
              className={`bg-[#EFF0F6] outline-none focus:border-primary py-4 ${
                locale === "ar" ? "pr-8" : "pl-8"
              } rounded-md `}
            />
            <input
              placeholder={t("form.placeholders.website")}
              className={`bg-[#EFF0F6] outline-none focus:border-primary py-4 ${
                locale === "ar" ? "pr-8" : "pl-8"
              } rounded-md`}
            />
          </div>
          <Textarea
            placeholder={t("form.placeholders.help")}
            className="min-h-[150px] bg-[#EFF0F6]"
          />
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-red-600 text-white py-6 text-lg"
          >
            {t("form.submit")}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Form;
