"use client";
import StarRating from "@/components/common/StarRating/StarRating";
import { FormValues } from "@/lib/types";
import { useFormik } from "formik";
import { Earth, MailOpen, MessageCircle, UserCheckIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import * as Yup from "yup";

const AddComment = () => {
  const [rate, setRate] = useState<number>(0);

  const t = useTranslations("form");
  const locale = useLocale();

  const validationSchema = useMemo(() => {
    return Yup.object({
      name: Yup.string()
        .min(3, "Your Name Must be More than 3 characters")
        .max(10, "Your Name Must be less than 10 characters")
        .required("First Name is required"),

      email: Yup.string()
        .email("Enter a valid Email")
        .required("Email is required"),
      website: Yup.string()
        .url("Enter a valid Website URL")
        .required("Website is required"),

      comment: Yup.string()
        .min(30, "Comment must be at least 30 characters")
        .max(200, "Comment must be less than 200 characters")
        .required("Comment is required"),
    });
  }, []);

  const handleAddComment = (values: FormValues) => {
    console.log({ ...values, rate });
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      website: "",
      comment: "",
    },
    validationSchema,
    onSubmit: handleAddComment,
  });

  return (
    <section className="pt-5 pb-14">
      <h3 className="font-bold text-2xl mb-2">{t("leaveComment")}</h3>
      {/* <p className="text-lightGray mb-4">
        Your email address will not be published. Required fields are marked *
      </p> */}

      <form onSubmit={formik.handleSubmit}>
        {/* Name */}
        <div className="my-5">
          <div className="relative">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-primary"
              placeholder={t("placeholders.name")}
              id="name"
              name="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <UserCheckIcon
              size={16}
              className={`absolute text-primary top-1/2  -translate-y-1/2 ${
                locale === "en" ? "right-4" : "left-4"
              }`}
            />
          </div>
          {formik.touched.name && formik.errors.name && (
            <span className="text-destructive text-sm mt-2 block">
              {formik.errors.name}
            </span>
          )}
        </div>

        <div className="my-5 flex gap-5">
          {/* Email */}
          <div className="w-full md:w-[calc(50%-5px)]">
            <div className="relative">
              <input
                type="email"
                placeholder={t("placeholders.email")}
                id="email"
                name="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-primary"
              />
              <MailOpen
                size={16}
                className={`absolute text-primary top-1/2 -translate-y-1/2  ${
                  locale === "en" ? "right-4" : "left-4"
                }`}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <span className="text-destructive text-sm mt-2 block">
                {formik.errors.email}
              </span>
            )}
          </div>

          {/* Website */}
          <div className="w-full md:w-[calc(50%-5px)]">
            <div className="relative">
              <input
                type="url"
                placeholder={t("placeholders.website")}
                id="website"
                name="website"
                value={formik.values.website}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-primary"
              />
              <Earth
                size={16}
                className={`absolute text-primary top-1/2  -translate-y-1/2 ${
                  locale === "en" ? "right-4" : "left-4"
                }`}
              />
            </div>
            {formik.touched.website && formik.errors.website && (
              <span className="text-destructive text-sm mt-2 block">
                {formik.errors.website}
              </span>
            )}
          </div>
        </div>

        {/* Comment */}
        <div className="relative my-5">
          <textarea
            className="w-full border focus:outline-none focus:border-primary p-3 rounded-md"
            name="comment"
            id="comment"
            cols={30}
            rows={10}
            placeholder={t("placeholders.comment")}
            value={formik.values.comment}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          ></textarea>
          <MessageCircle
            size={16}
            className={`absolute text-primary top-[20px]  -translate-y-1/2 ${
              locale === "en" ? "right-4" : "left-4"
            }`}
          />
          {formik.touched.comment && formik.errors.comment && (
            <span className="text-destructive text-sm mt-2 block">
              {formik.errors.comment}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="my-5">
          <StarRating rate={rate} maxStars={5} onRatingChange={setRate} />
          <p className="text-sm text-gray-500 mt-2">
            {t("Rating")}: {rate} / 5
          </p>
        </div>

        <div>
          <button
            type="submit"
            className="bg-primary py-3 px-4 rounded w-[200px] flex items-center justify-center focus:border-b-primary hover:bg-red-600 text-white whitespace-nowrap"
          >
            {t("submit")}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddComment;
