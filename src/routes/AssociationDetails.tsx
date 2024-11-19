import AssociationAbout from "@/components/AssociationAbout";
import AssociationHeader from "@/components/AssociationHeader";
import EventList from "@/components/EventList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  associationId: number;
}
// TODO: Make the components wider for large screens
// TODO: Load real data from the backend
function AssociationDetails({ associationId }: Props) {
  console.log(associationId);
  return (
    <div className="flex flex-col items-center justify-between">
      <AssociationHeader />
      <Tabs defaultValue="events" className="w-full md:max-w-4xl">
        <TabsList>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="events">
          <EventList />
        </TabsContent>
        <TabsContent value="about">
          <AssociationAbout />
        </TabsContent>
      </Tabs>

      {/* TODO: Fix the place of the button to be on the bottom  */}
      <Button variant="action" className="mb-4">
        Join association
      </Button>
    </div>
  );
}

export default AssociationDetails;
