import { servicesItems } from "@/data/mock-services";
import { useTranslations } from "next-intl";
import SingleItemService from "./SingleItemService";

const ServicesItems = () => {
  const t = useTranslations();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
      {servicesItems(t).map((item) => (
        <SingleItemService key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ServicesItems;