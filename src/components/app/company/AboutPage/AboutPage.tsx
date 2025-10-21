import Testimonials from "../HomePage/Testimonials";
import OurServicesWorks from "../ServicesPage/OurServicesWorks";
import Teams from "../TeamPage/teams/Teams";
import AboutUs from "./About-us";
import AboutHero from "./AboutHero";

const AboutPage = () => {
  const gradient =
    "linear-gradient(to right, rgba(237, 245, 255, 0.1) 0%, #ccdff7 100%)";

  return (
    <>
      <AboutHero />
      <AboutUs />
      <OurServicesWorks background={gradient} />
      <Teams />
      <Testimonials />
    </>
  );
};

export default AboutPage;
