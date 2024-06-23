/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
  FieldValues,
  FormProvider
} from "react-hook-form";
import { ZodType, ZodTypeDef } from "zod";

type FormProps<TFormValues extends FieldValues, Schema> = {
  children: (methods: UseFormReturn<TFormValues>) => ReactNode;
  options?: UseFormProps<TFormValues>;
  schema?: Schema;
  onSubmit: SubmitHandler<TFormValues>;
  className?: string;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>(
  props: FormProps<TFormValues, Schema>
) => {
  const { children, onSubmit, className, options, schema } = props;

  const methods = useForm<TFormValues>({
    shouldUnregister: true,
    ...options,
    resolver: schema ? zodResolver(schema) : undefined
  });

  return <FormProvider {...methods}>{children(methods)}</FormProvider>;
};
