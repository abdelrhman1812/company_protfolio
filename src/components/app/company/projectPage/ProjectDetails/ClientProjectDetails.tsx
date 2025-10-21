import { CalendarMinus, ChartBarStacked, Map, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const ClientProjectDetails = () => {
  const t = useTranslations("ProjectPage.projectDetails.clientProjectDetails");
  return (
    <div className="bg-secondary p-4 md:p-12  relative z-30 -mt-10 rounded-md">
      <h2 className="text-white border-b border-b-gray-50 mb-8 pb-5 font-bold text-2xl text-center">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Client Name */}
        <div className="flex gap-4">
          <div className="bg-primary p-2 w-12 h-12 rounded-full flex justify-center items-center text-white">
            <Users size={20} />
          </div>
          <div>
            <h3 className="text-white text-xl">{t("clientName")} </h3>
            <p className="text-lightGray text-xs">{t("clientValue")}</p>
          </div>
        </div>

        {/* Category */}
        <div className="flex gap-4">
          <div className="bg-primary p-2 w-12 h-12 rounded-full flex justify-center items-center text-white">
            <ChartBarStacked size={20} />
          </div>
          <div>
            <h3 className="text-white text-xl">{t("category")}</h3>
            <p className="text-lightGray text-xs">{t("categoryValue")}</p>
          </div>
        </div>

        {/* Date */}
        <div className="flex gap-4">
          <div className="bg-primary p-2 w-12 h-12 rounded-full flex justify-center items-center text-white">
            <CalendarMinus size={20} />
          </div>
          <div>
            <h3 className="text-white text-xl">{t("date")}</h3>
            <p className="text-lightGray text-xs">{t("dateValue")}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex gap-4">
          <div className="bg-primary p-2 w-12 h-12 rounded-full flex justify-center items-center text-white">
            <Map size={20} />
          </div>
          <div>
            <h3 className="text-white text-xl">{t("address")}</h3>
            <p className="text-lightGray text-xs">{t("addressValue")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProjectDetails;
