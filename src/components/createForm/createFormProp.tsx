import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

export const formSchemaEvent = z.object({
  title: z.string().min(1, {
    message: "Title is required.",
  }),
  description: z.string().optional(),
  location: z.string().optional(),
  price: z.number().min(0, {
    message: "Price is required. 0 means free.",
  }),
  capacity: z.number().optional(),
  date: z.date().min(new Date(), {
    message: "Date should be in the future.",
  }),
  picture: z
    .instanceof(File)
    .refine((file) => file.size !== 0, "Please upload an image")
    .optional(),
});

export const formSchemaAssociation = z.object({
  title: z.string().min(1, {
    message: "Title is required.",
  }),
  description: z.string().optional(),
  picture: z
    .instanceof(File)
    .refine((file) => file.size !== 0, "Please upload an image")
    .optional(),
  telegram: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  membershipFee: z.number().optional(),
});

export const formSchema = z.union([formSchemaEvent, formSchemaAssociation]);
type FormData = z.infer<typeof formSchema>;

export interface CreateFormProp {
  form: UseFormReturn<FormData, any, undefined>;
}
