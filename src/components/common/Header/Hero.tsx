import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import HeroText from "./HeroText";

const slides = [
  {
    id: 1,
    title: "Business Consulting Agency",
    heading: "Business consulting solution",
    description:
      "We help small startups grow from idea to millions of users. We can also automate your marketing and customer service.",
    video: "/Image/Hero/hero_4.mp4",
  },
  {
    id: 2,
    title: "Strategic Planning",
    heading: "Grow your business with us",
    description:
      "Expert consultants ready to help you develop and implement effective business strategies.",
    video: "/Image/Hero/hero_5.mp4",
  },
  {
    id: 3,
    title: "Strategic Planning",
    heading: "Grow your business with us",
    description:
      "Expert consultants ready to help you develop and implement effective business strategies.",
    video: "/Image/Hero/hero_1.mp4",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <video
                src={slide.video}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="absolute top-0 left-0 w-full h-full z-10">
                {/* <Image
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                  src="/Image/Hero/01.png"
                  alt="Overlay"
                  width={500}
                  height={300}
                />
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                  src="/Image/Hero/02.png"
                  alt="Overlay"
                  width={500}
                  height={300}
                /> */}
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
                  src="/Image/Hero/03.png"
                  alt="Overlay"
                  width={500}
                  height={300}
                />
              </div>

              <div className="relative z-20 container flex justify-between items-center pt-24 md:pt-48 text-white">
                <HeroText />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
