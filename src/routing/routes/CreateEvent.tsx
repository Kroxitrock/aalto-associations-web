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

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}
