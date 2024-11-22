import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
export const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required.",
  }),
  description: z.string().optional(),
  location: z.string().optional(),
  price: z.number().min(0, {
    message: "Price is required. 0 means free. ",
  }),
  capacity: z.number().optional(),
  date: z.date().optional(),
  picture: z
    .instanceof(File)
    .refine((file) => file.size !== 0, "Please upload an image")
    .optional(),
});
type FormData = z.infer<typeof formSchema>;

export interface CreateFormProp {
  form: UseFormReturn<FormData, any, undefined>;
}
