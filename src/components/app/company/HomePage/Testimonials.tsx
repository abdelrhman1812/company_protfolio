"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import TitleSection from "@/components/common/TitleSection/TitleSection";
import { testimonials } from "@/data/mock-testimonials";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";
import Brands from "./Brands";
import TestimonialsActions from "./Testimonials/testimonials-actions";
import TestimonialsSlides from "./Testimonials/TestimonialsSlides";

const Testimonials = () => {
  const swiperRef = useRef<SwiperType>(null);
  const t = useTranslations("HomePage.Testimonials");

  // styles for testimonials
  const testimonialStyle = {
    backgroundImage: "url('/Image/Testimonial/bg-01.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      style={testimonialStyle}
      className="py-16 px-2 md:px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col  md:flex-row gap-9 md:gap-0 justify-between items-center mb-12">
          <div className="flex gap-4 flex-col">
            <TitleSection title={t("title")} subtitle={t("subtitle")} />
          </div>

          {/* btn pre and next */}
          <TestimonialsActions swiperRef={swiperRef} />
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          //   className="!overflow-visible"
        >
          {testimonials(t).map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialsSlides testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Brands */}
        <Brands />
      </div>
    </section>
  );
};

export default Testimonials;
