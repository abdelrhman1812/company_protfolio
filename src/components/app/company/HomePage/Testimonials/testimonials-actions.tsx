import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import type { Swiper as SwiperType } from "swiper";

const TestimonialsActions = ({
  swiperRef,
}: {
  swiperRef: React.RefObject<SwiperType | null>;
}) => {
  // handle previous and next slide
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const locale = useLocale();

  return (
    <>
      <div className={`flex gap-4 ${locale !== "en" && "flex-row-reverse"}`}>
        <button
          onClick={handlePrev}
          className="p-4 rounded-full   border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-4 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default TestimonialsActions;
