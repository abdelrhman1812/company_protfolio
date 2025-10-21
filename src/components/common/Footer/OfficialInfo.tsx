import { typeT } from "@/lib/types";
import { Mail, Phone } from "lucide-react";

const OfficialInfo = ({ t }: { t: typeT }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">
        {t("Footer.official_info")}
      </h3>
      <p className="text-white mb-6">{t("Footer.address")}</p>
      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-[#1d1e33] p-3 rounded-lg">
          <div className="p-3 bg-red-500 rounded-lg">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold">
              {t("ContactUsPage.email")} :
            </p>
            <p className="text-white">support@kyanlabs.coms</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-[#1d1e33] p-3 rounded-lg">
          <div className="p-3 bg-red-500 rounded-lg">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold">
              {t("ContactUsPage.phone")} :
            </p>
            <p className="text-white">01024856345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialInfo;
