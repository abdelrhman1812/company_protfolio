import HeroPage from "@/components/common/HeroPage/HeroPage";

const TeamHero = ({ title }: { title: string }) => {
  return (
    <HeroPage
      title={title}
      imageUrl="/Image/About/hero.png"
      height="50vh"
      textColor="white"
      path="/teams"
    />
  );
};

export default TeamHero;
