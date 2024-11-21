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
  date: z.string().optional(),
  location: z.string().optional(),
  price: z.number().min(0, {
    message: "Price is required. 0 means free. ",
  }),
  capacity: z.number().optional(),
});
type FormData = z.infer<typeof formSchema>;

export default function CreateEvent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
          <div className="flex flex-row  space-x-4">
            <Date form={form} />
            <Location form={form} />
          </div>

          <div className="flex flex-row  space-x-4">
            <Price form={form} />
            <Capacity form={form} />
          </div>

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
        <FormItem className="w-1/2">
          <FormLabel>Title *</FormLabel>
          <FormControl>
            <Input placeholder="Enter event title" {...field} />
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
            <textarea
              className="w-full p-2 rounded-md border border-input bg-background resize-y overflow-auto h-24"
              placeholder="Description"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

// TODO: Use date picker
function Date({ form }: Prop) {
  return (
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem className="w-1/2">
          <FormLabel>Date</FormLabel>
          <FormControl>
            <Input className="" placeholder="DD.MM.YYYY - 00:00" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function Location({ form }: Prop) {
  return (
    <FormField
      control={form.control}
      name="location"
      render={({ field }) => (
        <FormItem className="w-1/2">
          <FormLabel>Location</FormLabel>
          <FormControl>
            <Input className="" placeholder="Location" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function Price({ form }: Prop) {
  return (
    <FormField
      control={form.control}
      name="price"
      render={({ field }) => (
        <FormItem className="w-1/2">
          <FormLabel>Price *</FormLabel>
          <FormControl>
            <Input className="" placeholder="Price" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function Capacity({ form }: Prop) {
  return (
    <FormField
      control={form.control}
      name="capacity"
      render={({ field }) => (
        <FormItem className="w-1/2">
          <FormLabel>Capacity</FormLabel>
          <FormControl>
            <Input className="" placeholder="Paricipents capacity" {...field} />
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
