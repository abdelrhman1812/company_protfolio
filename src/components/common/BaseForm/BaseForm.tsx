import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFormik, type FormikConfig, type FormikValues } from "formik";
import { AlertCircle } from "lucide-react";
import type * as React from "react";

interface BaseFormProps<T extends FormikValues> {
  title: string;
  initialValues: T;
  validationSchema: T;
  onSubmit: (values: T) => void;
  onCancel: () => void;
  error?: string | null;
  children: (formik: ReturnType<typeof useFormik<T>>) => React.ReactNode;
  submitButtonText?: string;
}

export function BaseForm<T extends FormikValues>({
  title,
  initialValues,
  validationSchema,
  onSubmit,
  onCancel,
  error,
  children,
  submitButtonText = "Submit",
}: BaseFormProps<T>) {
  const formik = useFormik<T>({
    initialValues,
    validationSchema,
    onSubmit,
  } as FormikConfig<T>);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <form onSubmit={formik.handleSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {children(formik)}
        </CardContent>

        <CardFooter className="flex justify-end space-x-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">{submitButtonText}</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
