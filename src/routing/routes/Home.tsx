import "./Home.css";
import EventList from "@/components/EventList";
import AssociationsCarousel from "@/components/AssociationsCarousel";
import { CardTitle } from "@/components/ui/card";
import { MyAssociationsProvider } from "@/provider/MyAssociationsProvider";
import { MyEventsProvider } from "@/provider/MyEventProvider";
import { EventListType } from "@/model/event";

function Home() {
  return (
    <div>
      <CardTitle className="border-b border-white mb-4">
        My associations
      </CardTitle>

      <MyAssociationsProvider>
        <AssociationsCarousel />
      </MyAssociationsProvider>

      <CardTitle className="border-b border-white mb-4 mt-4">
        Upcoming Events
      </CardTitle>
      <MyEventsProvider>
        <EventList provider={EventListType.MY_EVENTS} />
      </MyEventsProvider>
    </div>
  );
}

export default Home;
