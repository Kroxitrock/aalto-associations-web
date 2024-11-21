import AssociationAbout from "@/components/AssociationAbout";
import AssociationHeader from "@/components/AssociationHeader";
import EventList from "@/components/EventList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useParams } from "react-router-dom";
import { AssociationTabsEnum } from "@/model/association";
import AssociationDetailsProvider from "@/provider/AssociationDetailsProvider";
import AssociationEventsProvider from "@/provider/AssociationEventsProvider";

// TODO: Make the components wider for large screens
function AssociationDetails() {
  const { id } = useParams<{ id: string }>(); //TODO: create an interface Param here
  const navigate = useNavigate();

  if (!id) {
    throw new Error("No association ID provided in the URL");
  }
  const associationId = parseInt(id, 10);

  const currentTab =
    Object.values(AssociationTabsEnum).find((tab) =>
      location.pathname.endsWith(tab)
    ) || AssociationTabsEnum.Events;

  const handleTabChange = (tab: AssociationTabsEnum) => {
    navigate(`/associations/${associationId}/${tab}`);
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <AssociationDetailsProvider associationId={associationId}>
        <AssociationHeader />
      </AssociationDetailsProvider>
      <Tabs defaultValue={currentTab} className="w-full">
        <TabsList>
          <TabsTrigger
            value="events"
            onClick={() => handleTabChange(AssociationTabsEnum.Events)}
          >
            Events
          </TabsTrigger>
          <TabsTrigger
            value="about"
            onClick={() => handleTabChange(AssociationTabsEnum.About)}
          >
            About
          </TabsTrigger>
        </TabsList>
        <TabsContent value="events">
          <AssociationEventsProvider associationId={associationId}>
            <EventList />
          </AssociationEventsProvider>
        </TabsContent>
        <TabsContent value="about">
          <AssociationAbout />
        </TabsContent>
      </Tabs>
      <Button
        variant="action"
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2"
      >
        Join association
      </Button>
    </div>
  );
}

export default AssociationDetails;
