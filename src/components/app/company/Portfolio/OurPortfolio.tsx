"use client";

import { CursorEffectProjects } from "@/components/common/CursorEffect/CursorEffect";
import { portfolioItems } from "@/data/mock-portfolio";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const OurPortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const t = useTranslations("HomePage.Portfolio");
  return (
    <section className="absolute  top-1/2 left-1/2 transform -translate-x-1/2  w-full ">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        speed={5000}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {portfolioItems(t).map((item, index) => (
          <SwiperSlide key={index}>
            <div
              ref={(el) => {
                containerRefs.current[index] = el;
              }}
              className="relative  rounded-lg overflow-hidden  transition-all duration-300 transform scale-90 hover:scale-100"
            >
              <CursorEffectProjects
                containerRef={{ current: containerRefs.current[index] }}
              />
              {/* Image */}
              <div className="relative h-[340px] w-full ">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="w-full object-cover  block mx-auto"
                  priority
                  loading="eager"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 md:bg-red-500 transition-all duration-300 ${
                    index === activeIndex ? "opacity-30" : "opacity-0"
                  }`}
                ></div>
              </div>
              {/* Content */}
              <div className="absolute bottom-5 left-5 bg-white p-4 rounded-lg shadow-lg">
                <span className="absolute top-[-14px] right-[30px] w-0 h-0 border-l-[30px] border-b-[30px] translate-x-[50%] transform rotate-[-135deg] border-transparent border-b-white"></span>
                <h3 className="text-lg font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.jobTitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurPortfolio;
