import TitleSection from "@/components/common/TitleSection/TitleSection";
import { useTranslations } from "next-intl";
import AccordionQuestion from "./AccordionQuestion";
import QuestionImg from "./QuestionImg";

interface QuestionProps {
  paddingSection?: string | number;
  paddingContainer?: string | number;
}

const Question: React.FC<QuestionProps> = ({
  paddingSection = "120px",
  paddingContainer = "100px",
}) => {
  const questionStyle = {
    backgroundImage: "url('/Image/Questions/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingTop: paddingSection, // Apply padding dynamically
    paddingBottom: "120px", // Static bottom padding
  };

  const containerStyle = {
    paddingTop: paddingContainer, // Apply dynamic container padding
  };

  const t = useTranslations("HomePage.Questions");

  return (
    <section style={questionStyle}>
      <div className="container" style={containerStyle}>
        <div className="flex justify-center flex-col items-center">
          <TitleSection title={t("title")} subtitle={t("subTitle")} />
        </div>
        <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-5">
          <QuestionImg />
          <AccordionQuestion />
        </div>
      </div>
    </section>
  );
};

export default Question;
