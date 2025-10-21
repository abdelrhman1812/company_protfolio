import { TestimonialsType } from "@/lib/types";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

const TestimonialsSlides = ({
  testimonial,
}: {
  testimonial: TestimonialsType;
}) => {
  return (
    <div className="bg-white flex-col md:flex-row  flex items-center rounded-2xl p-8 shadow-lg">
      {/*  */}
      <div className="flex flex-col gap-3 w-full md:w-[551px] mb-4">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => {
            const filled = i < Math.floor(testimonial.rating);
            const half =
              i === Math.floor(testimonial.rating) &&
              testimonial.rating % 1 !== 0;
            return (
              <span key={i} className="text-primary">
                {half ? (
                  <StarHalf className="w-5 h-5" />
                ) : (
                  <Star
                    className="w-5 h-5"
                    fill={filled ? "currentColor" : "none"}
                  />
                )}
              </span>
            );
          })}
        </div>

        {/* Testimonial Text */}
        <div>
          <p className="text-secondary text-base">{testimonial.text}</p>
          <h3 className="font-semibold mt-5 text-secondary">
            {testimonial.name}
          </h3>
          <p className="text-lightGray text-sm my-2">{testimonial.role}</p>
        </div>
      </div>

      {/* Image */}
      <div className="flex  gap-4">
        <div className="relative">
          <div className="absolute -right-2 -top-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">
            6
          </div>
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={144}
            height={220}
            className="rounded-full w-[100px] md:w-[144px]  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlides;
