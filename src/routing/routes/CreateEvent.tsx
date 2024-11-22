import { CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Picture from "@/components/createForm/picture";
import { Prop, formSchema } from "@/components/createForm/createEventProp";
import { z } from "zod";

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
          <Picture form={form} />
          <Button type="submit" variant="action">
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
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

// TODO: font is different
function Date({ form }: Prop) {
  return (
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem className="w-1/2 flex flex-col mt-3">
          <FormLabel>Pick a date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "text-left font-normal rounded-lg flex justify-between items-center w-full",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <span className="flex-1">
                    {field.value ? (
                      `${format(field.value, "PPP")} at ${String(
                        field.value.getHours()
                      ).padStart(2, "0")}:${String(
                        field.value.getMinutes()
                      ).padStart(2, "0")}`
                    ) : (
                      <span>Pick a date and time</span>
                    )}
                  </span>
                  <CalendarIcon className="ml-2" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="sm:flex">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
                <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                  <ScrollArea className="w-64 sm:w-auto">
                    <div className="flex sm:flex-col p-2">
                      {Array.from({ length: 24 }, (_, hour) => (
                        <Button
                          key={hour}
                          variant={
                            field.value &&
                            field.value.getHours() % 12 === hour % 12
                              ? "info"
                              : "outline"
                          }
                          className="sm:w-full shrink-0 aspect-square"
                          onClick={() => {
                            field.value?.setHours(hour);
                            field.onChange(field.value);
                          }}
                        >
                          {hour}
                        </Button>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" className="sm:hidden" />
                  </ScrollArea>
                  <ScrollArea className="w-64 sm:w-auto">
                    <div className="flex sm:flex-col p-2">
                      {Array.from({ length: 12 }, (_, i) => i * 5).map(
                        (minute) => (
                          <Button
                            key={minute}
                            variant={
                              field.value &&
                              field.value?.getMinutes() === minute
                                ? "info"
                                : "outline"
                            }
                            className="sm:w-full shrink-0 aspect-square"
                            onClick={() => {
                              field.value?.setMinutes(minute);
                              field.onChange(field.value);
                            }}
                          >
                            {minute}
                          </Button>
                        )
                      )}
                    </div>
                    <ScrollBar orientation="horizontal" className="sm:hidden" />
                  </ScrollArea>
                </div>
              </div>
            </PopoverContent>
          </Popover>
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
