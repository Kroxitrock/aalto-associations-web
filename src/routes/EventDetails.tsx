import EventHeader from "@/components/EventHeader";
import { Button } from "@/components/ui/button";

function EventDetails() {
  return (
    <div className="flex flex-col items-center justify-between">
      <EventHeader />
      {/* <Tabs defaultValue="events" className="w-full md:max-w-4xl">
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
      </Tabs> */}

      {/* TODO: Fix the place of the button to be on the bottom  */}
      <Button variant="action" className="mb-4">
        Join
      </Button>
    </div>
  );
}

export default EventDetails;
