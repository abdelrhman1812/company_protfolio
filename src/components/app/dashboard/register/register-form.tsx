"use client";

import ErrorMsg from "@/components/common/error-msg/error-msg";
import FormInput from "@/components/common/FormInput/FormInput";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Form, Formik } from "formik";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";

interface RegisterValues {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const RegisterForm = () => {
  const t = useTranslations("registerForm");
  const locale = useLocale();
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t("errors.nameRequired"))
      .min(2, t("errors.nameMin")),
    email: Yup.string()
      .email(t("errors.emailInvalid"))
      .required(t("errors.emailRequired")),
    password: Yup.string()
      .min(8, t("errors.passwordMin"))
      .matches(/^(?=.*[A-Z])/, t("errors.passwordUpper"))
      .required(t("errors.passwordRequired")),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], t("errors.confirmMatch"))
      .required(t("errors.confirmRequired")),
  });

  const handleSubmit = (values: RegisterValues) => {
    setError(null);
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CardHeader className="pb-0">
            {error && <ErrorMsg msg={error} />}
            <h1 className="text-3xl font-bold text-center text-primary mb-2">
              {t("title")}
            </h1>
            <p className="text-center text-secondary">{t("subtitle")}</p>
          </CardHeader>

          <CardContent className="space-y-4 pt-6">
            <FormInput
              name="name"
              type="text"
              label={t("name")}
              placeholder={t("name")}
              Icon={User}
            />
            <FormInput
              name="email"
              type="email"
              label={t("email")}
              placeholder={t("email")}
              Icon={Mail}
            />
            <div className="relative">
              <FormInput
                name="password"
                type={showPassword ? "text" : "password"}
                label={t("password")}
                placeholder={t("password")}
                Icon={Lock}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute ${
                  locale === "ar" ? "left-3" : "right-3"
                } top-1/2 transform -translate-y-1/2 text-primary`}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="relative">
              <FormInput
                name="password_confirmation"
                type={showConfirmPassword ? "text" : "password"}
                label={t("confirmPassword")}
                placeholder={t("confirmPassword")}
                Icon={Lock}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={`absolute ${
                  locale === "ar" ? "left-3" : "right-3"
                } top-1/2 transform -translate-y-1/2 text-primary`}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("registering") : t("registerBtn")}
            </Button>
            <p className="text-sm text-center">
              {t("alreadyHaveAccount")}{" "}
              <Link
                href="/auth/login"
                className="text-primary hover:text-primary/50"
              >
                {t("loginHere")}
              </Link>
            </p>
          </CardFooter>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
