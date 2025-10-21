import { typeT } from "@/lib/types";

const FormHead = ({ t }: { t: typeT }) => {
  return (
    <div className="mt-3 mb-6">
      <h2 className="text-[24px] md:text-[32px] text-secondary font-bold mb-4">
        {t("ContactUsPage.title")}
      </h2>
      <p className="text-lightGray">{t("ContactUsPage.description")}</p>
    </div>
  );
};

export default FormHead;
