import AssociationAbout from "@/components/AssociationAbout";
import AssociationHeader from "@/components/AssociationHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function AssociationDetails() {
  return (
    <div className="flex flex-col items-center justify-center">
      <AssociationHeader></AssociationHeader>
      <Tabs defaultValue="events" className="w-full md:max-w-4xl">
        <TabsList>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="events">
          <AssociationAbout />
        </TabsContent>
        <TabsContent value="about">About page</TabsContent>
      </Tabs>
    </div>
  );
}

export default AssociationDetails;
