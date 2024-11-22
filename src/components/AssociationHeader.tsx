import { AssociationRoleEnum } from "@/model/association";
import { Button } from "./ui/button";
import { Card, CardImage, CardTitle } from "./ui/card";
import { useAssociationDetails } from "@/contexts/AssociationDetailsContext";
import { Check, Pencil } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { joinAssociation } from "@/api/associations";

function AssociationHeader() {
  const { data, refetch, isPending, error } = useAssociationDetails();

  const { mutate } = useMutation({
    mutationFn: joinAssociation,
    onSuccess: () => {
      refetch();
    },
    onError: (e) => {
      console.log(e);
      //TODO: Put toast
    },
  });

  return (
    <div className="w-full">
      {isPending && <div>Loading...</div>}
      {error && <div>Error loading association details</div>}
      {data && (
        <Card className="relative  flex items-center justify-center p-4 w-full">
          <div className="flex flex-col items-center justify-center">
            <CardImage
              className="md:w-20"
              src={data.logo}
              alt={`${data.name} logo`}
            />
            <CardTitle className="text-3xl text-center mt-4">
              {data.name}
            </CardTitle>
          </div>
          {!data.role && (
            <Button
              className="absolute bottom-4 right-4 px-4"
              variant={"action"}
              onClick={() => mutate(data.id)}
            >
              Join
            </Button>
          )}

          {data.role === AssociationRoleEnum.MEMBER && (
            <Button className="absolute bottom-4 right-4 px-4" variant="icon">
              <Check className="h-4 w-4" /> Joined
            </Button>
          )}

          {data.role === AssociationRoleEnum.LEADER && (
            <Button className="absolute bottom-4 right-4 px-4" variant="icon">
              <Pencil className="h-4 w-4" /> Edit
            </Button>
          )}
        </Card>
      )}
    </div>
  );
}

export default AssociationHeader;
