import AssociationAbout from "@/components/AssociationAbout";
import AssociationHeader from "@/components/AssociationHeader";
import EventList from "@/components/EventList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useParams } from "react-router-dom";
import { AssociationTabsEnum } from "@/model/association";
import AssociationDetailsProvider from "@/provider/AssociationDetailsProvider";
import AssociationEventsProvider from "@/provider/AssociationEventsProvider";
import { EventListType } from "@/model/event";

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
    ) || AssociationTabsEnum.EVENTS;

  const handleTabChange = (tab: AssociationTabsEnum) => {
    navigate(`/associations/${associationId}/${tab}`);
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <AssociationDetailsProvider associationId={associationId}>
        <AssociationHeader />
        <Tabs defaultValue={currentTab} className="w-full md:max-w-4xl">
          <TabsList>
            <TabsTrigger
              value="events"
              onClick={() => handleTabChange(AssociationTabsEnum.EVENTS)}
            >
              Events
            </TabsTrigger>
            <TabsTrigger
              value="about"
              onClick={() => handleTabChange(AssociationTabsEnum.ABOUT)}
            >
              About
            </TabsTrigger>
          </TabsList>
          <TabsContent value="events">
            <AssociationEventsProvider associationId={associationId}>
              <EventList provider={EventListType.ASSOCIATION_EVENTS} />
            </AssociationEventsProvider>
          </TabsContent>
          <TabsContent value="about">
            <AssociationAbout />
          </TabsContent>
        </Tabs>
      </AssociationDetailsProvider>
    </div>
  );
}

export default AssociationDetails;
