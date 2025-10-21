import { typeT } from "@/lib/types";
import { Mail, MapPinCheck, PhoneIcon } from "lucide-react";

const ContactInfo = ({ t }: { t: typeT }) => {
  return (
    <>
      {/* contact info */}
      <div className="space-y-6">
        {/* Call Us */}
        <div className="flex items-start gap-x-4 border-b border-b-gray-300p pb-5">
          <div className="bg-primary p-3 rounded-lg ">
            <PhoneIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{t("ContactUsPage.callUs")}</h3>
            <p className="text-lightGray">0100803461</p>
          </div>
        </div>

        {/* E-mail */}
        <div className="flex items-start gap-x-4 border-b border-b-gray-300p pb-5">
          <div className="bg-primary p-3 rounded-lg">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{t("ContactUsPage.email")}</h3>
            <p className="text-lightGray">abdelrhmanali1812@gamil.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-x-4 border-b border-b-gray-300p pb-5">
          <div className="bg-primary p-3 rounded-lg">
            <MapPinCheck className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{t("ContactUsPage.address")}</h3>
            <p className="text-lightGray">Mansoura</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
