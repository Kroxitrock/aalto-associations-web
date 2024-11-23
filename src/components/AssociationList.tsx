import { useAssociations } from "@/contexts/AssociationsContext";
import { Card, CardDescription, CardImage, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function AssociationList() {
  const { data, isPending, error } = useAssociations();
  const navigate = useNavigate();
  const navigateAssociation = (associationId: number) => {
    navigate(`/associations/${associationId}/events`);
  };

  return (
    <div className="w-full">
      {isPending && <p>Loading associations...</p>}
      {error && <p>Error fetching associations!</p>}

      {data?.length === 0 && <p>No associations found.</p>}

      {data?.map((association) => (
        <Card key={association.id}>
          <CardImage
            src={association.logo}
            alt={`${association.name} logo`}
            className="p-4"
          />
          <div className="flex flex-col p-4 leading-normal flex-1">
            <div className="flex flex-row justify-between leading-normal">
              <CardTitle>{association.name}</CardTitle>
              <Button
                onClick={() => navigateAssociation(association.id)}
                className="icon"
              >
                Learn more
              </Button>
            </div>
            <CardDescription className="mt-4 max-h-16 line-clamp-3">
              {association.description}
            </CardDescription>
          </div>
        </Card>
      ))}

      <Button
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2"
        variant={"action"}
        onClick={() => navigate(`/associations/create`)}
      >
        Create own association
      </Button>
    </div>
  );
}
