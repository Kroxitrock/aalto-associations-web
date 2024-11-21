import "./Home.css";
import EventList from "@/components/EventList";
import AssociationsCarousel from "@/components/AssociationsCarousel";
import { CardTitle } from "@/components/ui/card";
import AssociationsProvider from "@/provider/AssociationsProvider";
import AssociationEventsProvider from "@/provider/AssociationEventsProvider";

function Home() {
  return (
    <div>
      <CardTitle className="border-b border-white mb-4">
        My associations
      </CardTitle>

      <AssociationsProvider>
        <AssociationsCarousel />
      </AssociationsProvider>

      <CardTitle className="border-b border-white mb-4 mt-4">
        Upcoming Events
      </CardTitle>
      <AssociationEventsProvider associationId={3}>
        <EventList />
      </AssociationEventsProvider>
    </div>
  );
}

export default Home;
