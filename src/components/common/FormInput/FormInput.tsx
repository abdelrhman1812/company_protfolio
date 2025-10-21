import ErrorMsg from "@/components/common/error-msg/error-msg";
import { useField } from "formik";
import type { LucideIcon } from "lucide-react";
import { useLocale } from "next-intl";
import type { FC, InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  Icon?: LucideIcon;
}

const FormInput: FC<FormInputProps> = ({ label, Icon, ...props }) => {
  const [field, meta] = useField(props);
  const locale = useLocale();

  return (
    <div>
      <label htmlFor={props.id || props.name} className="sr-only">
        {label}
      </label>
      <div className="relative">
        <input
          {...field}
          {...props}
          className="pl-10 pr-10 w-full py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary border-primary"
        />
        {Icon && (
          <Icon
            className={`absolute top-1/2 ${
              locale === "ar" ? "right-3" : "left-3"
            } transform -translate-y-1/2`}
          />
        )}
      </div>
      {meta.touched && meta.error && <ErrorMsg msg={meta.error} />}
    </div>
  );
};

export default FormInput;
