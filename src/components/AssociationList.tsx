import { useAssociations } from "@/contexts/AssociationsContext";
import { Card, CardHeader } from "./ui/card";

export default function AssociationList() {
  const { data, isPending, error } = useAssociations();

  return (
    <div className="flex flex-col">
      {isPending && <p>Loading associations...</p>}
      {error && <p>Error fetching associations!</p>}

      {data?.map((association) => (
        <Card>
          <CardHeader>{association.name}</CardHeader>
        </Card>
      ))}
    </div>
  );
}
