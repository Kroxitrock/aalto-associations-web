import { CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required.",
  }),
  description: z.string().optional(),
});
type FormData = z.infer<typeof formSchema>;

export default function CreateEvent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <div className="bg-shadowDark p-8 text-black">
      <CardTitle className="border-b border-white text-4xl mb-8 text-white">
        Create new event
      </CardTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Title form={form} />
          <Description form={form} />
          <Button type="submit" variant="action">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

interface Prop {
  form: UseFormReturn<FormData, any, undefined>;
}

function Title({ form }: Prop) {
  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input
              className="max-w-sm"
              placeholder="Enter event title"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function Description({ form }: Prop) {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Input className="" placeholder="Description" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}
