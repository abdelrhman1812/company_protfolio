import { TestimonialsType } from "@/lib/types";

export const testimonials = (
  t: (key: string) => string
): TestimonialsType[] => [
  {
    rating: 5,
    text: t("data.0.text"),
    name: t("data.0.name"),
    role: t("data.0.role"),
    image: "/Image/Testimonial/testimonial-1.jpg",
  },
  {
    rating: 4.5,
    text: t("data.1.text"),
    name: t("data.1.name"),
    role: t("data.1.role"),
    image: "/Image/Testimonial/testimonial-2.jpg",
  },
  {
    rating: 4.5,
    text: t("data.2.text"),
    name: t("data.2.name"),
    role: t("data.2.role"),
    image: "/Image/Testimonial/testimonial-1.jpg",
  },
  {
    rating: 4.5,
    text: t("data.3.text"),
    name: t("data.3.name"),
    role: t("data.3.role"),
    image: "/Image/Testimonial/testimonial-2.jpg",
  },
];
