import { CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import Picture from "@/components/createForm/picture";
import Capacity from "@/components/createForm/capacity";
import Description from "@/components/createForm/description";
import Title from "@/components/createForm/title";
import Location from "@/components/createForm/location";
import Price from "@/components/createForm/price";
import DatePicker from "@/components/createForm/datePicker";
import { formSchema } from "@/components/createForm/createFormProp";
import { z } from "zod";
import Event from "@/model/event";
import { useMutation } from "@tanstack/react-query";
import { createEvent } from "@/api/event";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
export default function CreateEvent() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    throw new Error("No association ID provided in the URL");
  }
  const associationId = parseInt(id, 10);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: undefined,
      location: "",
    },
  });
  const { mutate } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      navigate(`/associations/${associationId}`);
      toast({
        duration: 2000,
        description: "Event created successfuly!",
      });
    },
    onError: () => {
      toast({
        duration: 2000,
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const event: Event = {
      title: values.title,
      description: values.description,
      picture: values.picture ? values.picture.name : undefined,
      date: values.date,
      location: values.location,
      price: values.price || 0,
      capacity: values.capacity,
      associationId,
    };

    mutate(event);
  }

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
            <DatePicker form={form} />
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
