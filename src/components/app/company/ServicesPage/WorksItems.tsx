import { ourWorksItems } from "@/data/mock-works";
import { useTranslations } from "next-intl";
import SingleWork from "./SingleWork";

const WorksItems = () => {
  const t = useTranslations("HomePage.OurWorks");
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {ourWorksItems(t).map((item) => (
          <SingleWork key={item.id} item={item} />
        ))}
      </section>
    </>
  );
};

export default WorksItems;
