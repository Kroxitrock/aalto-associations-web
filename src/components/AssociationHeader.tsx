import { Card, CardImage, CardTitle } from "./ui/card";
import { useAssociation } from "@/contexts/AssociationContext";

function AssociationHeader() {
  const { data, isLoading, error } = useAssociation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading association details</div>;
  }

  return (
    <Card className="flex items-center justify-center p-4 w-full">
      <div className="flex flex-col items-center justify-center">
        <CardImage
          className="md:w-20"
          src={data?.logo}
          alt={`${data?.name} logo`}
        />
        <CardTitle className="text-3xl text-center mt-4">
          {data?.name}
        </CardTitle>
      </div>
    </Card>
  );
}

export default AssociationHeader;
