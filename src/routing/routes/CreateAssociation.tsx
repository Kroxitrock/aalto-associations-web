import { CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import Picture from "@/components/createForm/picture";
import Description from "@/components/createForm/description";
import Title from "@/components/createForm/title";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Telegram from "@/components/createForm/telegram";
import Phone from "@/components/createForm/phone";
import Email from "@/components/createForm/email";
import MembershipFee from "@/components/createForm/membershipFee";
import { Association, AssociationRoleEnum } from "@/model/association";
import { createAssociation, updateAssociation } from "@/api/associations";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AssociationDetailsProvider from "@/provider/AssociationDetailsProvider";
import { useGetAssociationDetails } from "@/hooks/useGetAssociationDetails";
import { useEffect } from "react";
import { base64ToFile, fileToBase64 } from "@/components/createForm/price";

//TODO: Edit ass goes to ass list, intead of ass/id/... smth maybe back page
export default function CreateAssociation() {
  const { id } = useParams();
  if (!id) {
    return <CreateAssociationContent />;
  }
  const associationId = parseInt(id, 10);
  return (
    <AssociationDetailsProvider associationId={associationId}>
      <CreateAssociationContent associationId={associationId} />
    </AssociationDetailsProvider>
  );
}

interface CreateAssociationContentProps {
  associationId?: number;
}

function CreateAssociationContent({
  associationId,
}: CreateAssociationContentProps) {
  const { toast } = useToast();
  const navigate = useNavigate();

  const formSchemaAssociation = z.object({
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

  const form = useForm<z.infer<typeof formSchemaAssociation>>({
    resolver: zodResolver(formSchemaAssociation),
    defaultValues: {
      title: "",
      picture: undefined,
    },
  });
  if (associationId) {
    const { reset } = form;

    // TODO: warinings in the console
    const { data: association } = useGetAssociationDetails(associationId);
    useEffect(() => {
      if (association) {
        reset({
          title: association.name,
          description: association.description || undefined,
          membershipFee: association.membership_fee || undefined,
          phone: association.phone || undefined,
          email: association.email || undefined,
          telegram: association.telegram || undefined,
          picture: base64ToFile(association.logo, association.name),
        });
      }
    }, [association, reset]);
  }

  const { mutate } = useMutation({
    mutationFn: (association: Association) => {
      return associationId
        ? updateAssociation(association, associationId)
        : createAssociation(association);
    },
    onSuccess: () => {
      closeForm();
      toast({
        duration: 2000,
        description: "Successfull request!",
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
    mutate(association);
  }

  function closeForm() {
    navigate(`/associations`);
  }

  return (
    <div className="bg-shadowDark p-8 text-black">
      <CardTitle className="border-b border-white text-4xl mb-8 text-white">
        {associationId ? "Edit" : "Create"} new association
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
          {!associationId && (
            <Button type="submit" variant="action" className="mr-4">
              Create
            </Button>
          )}
          {associationId && (
            <Button type="submit" variant="action" className="mr-4">
              Save
            </Button>
          )}
          <Dialog>
            <DialogTrigger>
              <Button type="button" variant="info">
                Cancel
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black">
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  Are you sure you do not want to
                  {associationId ? "edit" : "create"} this association?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button type="submit" onClick={closeForm}>
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </Form>
    </div>
  );
}
