import PlayBtn from "@/components/common/PlayBtn/PlayBtn";
import AboutUsImages from "./About-us-images";
import ProductShare from "./Product-share";

const AboutUsLeft = () => {
  return (
    <div className="relative">
      <AboutUsImages />
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <PlayBtn bgColor="bg-primary" textColor="text-white" />
      </div>
      {/* Product Share */}
      <ProductShare />
    </div>
  );
};

export default AboutUsLeft;
