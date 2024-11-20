import { useAssociations } from "@/contexts/AssociationsContext";
import { Card, CardDescription, CardImage, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function AssociationList() {
  const { data, isPending, error } = useAssociations();

  return (
    <div>
      {isPending && <p>Loading associations...</p>}
      {error && <p>Error fetching associations!</p>}

      {data?.length === 0 && <p>No associations found.</p>}

      {data?.map((association) => (
        <Card key={association.id}>
          <CardImage src={association.logo} alt={`${association.name} logo`} />
          <div className="flex flex-col p-4 leading-normal">
            <div className="flex flex-row justify-between leading-normal">
              <CardTitle>{association.name}</CardTitle>
              <Button className="icon">Learn more</Button>
            </div>
            <CardDescription className="mt-4">
              {association.description}
            </CardDescription>
          </div>
        </Card>
      ))}
    </div>
  );
}
