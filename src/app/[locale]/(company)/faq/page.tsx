import Question from "@/components/app/company/HomePage/Question";
import HeroPage from "@/components/common/HeroPage/HeroPage";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Nav");

  return (
    <main>
      <HeroPage
        title={t("faq")}
        imageUrl="/Image/About/hero.png"
        height="50vh"
        textColor="white"
        path="/faq"
      />

      <Question paddingSection={120} paddingContainer={0} />
    </main>
  );
};

export default Page;
