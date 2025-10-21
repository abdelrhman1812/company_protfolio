import { useLocale } from "next-intl";
import Image from "next/image";
import aboutImg1 from "../../../../../public/Image/About/about_2.jpg";
import aboutImg2 from "../../../../../public/Image/About/02.png";
import aboutImg3 from "../../../../../public/Image/About/about_3.webp";

const AboutUsImages = () => {
  return (
    <>
      {/* Images */}
      <Image
        src={aboutImg1}
        className="z-10 rounded"
        alt="aboutImg1"
        width={360}
        height={500}
      />
      <div
        className={`absolute top-0 ${
          useLocale() === "en" ? "right-0" : "left-0"
        }`}
      >
        <Image
          src={aboutImg2}
          className="z-10 rounded"
          alt="aboutImg1"
          width={170}
          height={280}
        />
      </div>
      <div
        className={`absolute bottom-6 ${
          useLocale() === "en" ? "right-0" : "left-0"
        }`}
      >
        <Image
          src={aboutImg3}
          className="z-10 rounded"
          alt="aboutImg1"
          width={370}
          height={120}
        />
      </div>
    </>
  );
};

export default AboutUsImages;
