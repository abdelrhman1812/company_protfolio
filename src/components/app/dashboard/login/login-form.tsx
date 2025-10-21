"use client";

import ErrorMsg from "@/components/common/error-msg/error-msg";
import FormInput from "@/components/common/FormInput/FormInput";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Form, Formik } from "formik";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import LoginImg from "./login-img";
import { useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const t = useTranslations("loginForm");
  const locale = useLocale();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("validation.validEmail"))
      .required(t("validation.emailRequired")),
    password: Yup.string()
      .min(6, t("validation.passwordMin"))
      .required(t("validation.passwordRequired")),
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    setError(null);
    console.log(values);
    router.push("/");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CardHeader className="pb-0">
            <LoginImg />
            {error && <ErrorMsg msg={error} />}
            <h1 className="text-3xl font-bold text-center text-primary mb-2">
              {t("title")}
            </h1>
            <p className="text-center text-secondary">{t("subtitle")}</p>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <FormInput
              name="email"
              type="email"
              label={t("email")}
              placeholder={t("email")}
              Icon={User}
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
                className={`absolute  top-1/2 transform -translate-y-1/2 text-primary ${
                  locale === "ar" ? "left-3" : "right-3"
                }`}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("loggingIn") : t("login")}
            </Button>
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:text-primary/50 text-center"
            >
              {t("forgotPassword")}
            </Link>
            <Link
              href="/auth/register"
              className="text-sm text-primary hover:text-primary/50 text-center"
            >
              {t("noAccount")}
            </Link>
          </CardFooter>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
