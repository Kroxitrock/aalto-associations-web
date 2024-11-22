import { CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import Picture from "@/components/createForm/picture";
import Description from "@/components/createForm/description";
import Title from "@/components/createForm/title";
import { formSchemaAssociation } from "@/components/createForm/createFormProp";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Telegram from "@/components/createForm/telegram";
import Phone from "@/components/createForm/phone";
import Email from "@/components/createForm/email";
import MembershipFee, {
  fileToBase64,
} from "@/components/createForm/membershipFee";
import { Association, AssociationRoleEnum } from "@/model/association";
import { createAssociation } from "@/api/associations";
export default function CreateAssociation() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchemaAssociation>>({
    resolver: zodResolver(formSchemaAssociation),
    defaultValues: {
      title: "",
    },
  });
  const { mutate } = useMutation({
    mutationFn: createAssociation,
    onSuccess: () => {
      navigate(`/associations`);
      toast({
        duration: 2000,
        description: "Association created successfuly!",
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

  async function onSubmit(values: z.infer<typeof formSchemaAssociation>) {
    let base64Picture = undefined;

    if (values.picture instanceof File) {
      base64Picture = await fileToBase64(values.picture);
    }

    const association: Association = {
      name: values.title,
      description: values.description,
      logo: base64Picture,
      telegram: values.telegram,
      phone: values.phone,
      email: values.email,
      membership_fee: values.membershipFee || 0,
      id: 0,
      role: AssociationRoleEnum.LEADER,
    };
    console.log("mutate");
    mutate(association);
  }

  return (
    <div className="bg-shadowDark p-8 text-black">
      <CardTitle className="border-b border-white text-4xl mb-8 text-white">
        Create new association
      </CardTitle>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Title form={form} />
          <Description form={form} />
          <div className="flex flex-row  space-x-4">
            <MembershipFee form={form} />
            <Phone form={form} />
          </div>
          <div className="flex flex-row  space-x-4">
            <Email form={form} />
            <Telegram form={form} />
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
