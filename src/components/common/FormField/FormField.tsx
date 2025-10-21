import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type * as React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "textarea" | "url" | "file" | "select";
  value: string | File | null;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onBlur: (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
  options?: { value: string; label: string }[];
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  icon,
  onIconClick,
  options,
}) => {
  console.log(options);

  const renderField = () => {
    if (type === "textarea") {
      return (
        <Textarea
          id={id}
          name={id}
          value={value as string}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      );
    }

    if (type === "file") {
      return (
        <div className="flex">
          <Input
            type="file"
            id={id}
            name={id}
            onChange={onChange}
            onBlur={onBlur}
            accept="image/*"
            className="hidden"
          />
          <Input
            readOnly
            value={value instanceof File ? value.name : ""}
            placeholder={placeholder}
            className="rounded-r-none"
            onClick={() => document.getElementById(id)?.click()}
          />
          {icon && (
            <Button
              type="button"
              variant="outline"
              className="rounded-l-none"
              onClick={onIconClick}
            >
              {icon}
            </Button>
          )}
        </div>
      );
    }

    if (type === "select" && options) {
      return (
        <Select
          onValueChange={(value) =>
            onChange({
              target: { value },
            } as React.ChangeEvent<HTMLSelectElement>)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option._id} value={option.name}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    return (
      <div className="flex">
        <Input
          id={id}
          name={id}
          type={type}
          value={value as string}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={icon ? "rounded-r-none" : ""}
        />
        {icon && (
          <Button
            type="button"
            variant="outline"
            className="rounded-l-none"
            onClick={onIconClick}
          >
            {icon}
          </Button>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {renderField()}
      {touched && error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};
