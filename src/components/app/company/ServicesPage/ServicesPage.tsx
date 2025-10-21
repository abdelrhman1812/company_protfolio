import Question from "../HomePage/Question";
import BusinessSection from "./BusinessSection";
import OurServices from "./OurServices";
import OurServicesWorks from "./OurServicesWorks";
import ServicesHero from "./ServicesHero";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <OurServices />
      <OurServicesWorks />
      <BusinessSection />
      <Question paddingContainer={0} paddingSection={120} />
    </>
  );
};

export default ServicesPage;
