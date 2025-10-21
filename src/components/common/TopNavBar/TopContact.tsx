import { Clock4, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type ContactListType = {
  icon: ReactNode;
  title: string;
}[];

const contactList: ContactListType = [
  {
    icon: <MapPin size={18} className="text-white" />,
    title: "contact.location",
  },
  {
    icon: <Clock4 size={18} className="text-white" />,
    title: "contact.working_hours",
  },
];

export const TopContact = () => {
  const t = useTranslations("TopNav");
  return (
    <div className="flex items-center gap-x-12">
      <div>
        <p className="text-white text-base hidden lg:block">
          {t("companyName")}
        </p>
      </div>
      {contactList.map((contact, index) => (
        <div key={index} className="flex items-center gap-2">
          {contact.icon}
          <p className="text-white text-base">{t(contact.title)}</p>
        </div>
      ))}
    </div>
  );
};
