import "./Home.css";
import EventList from "@/components/EventList";
import AssociationsCarousel from "@/components/AssociationsCarousel";
import { CardTitle } from "@/components/ui/card";
import { MyAssociationsProvider } from "@/provider/MyAssociationsProvider";
import { MyEventsProvider } from "@/provider/MyEventProvider";
function Home() {
  return (
    <div className="lg:max-w-4xl mx-auto p-6">
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
        <EventList provider="my_events" />
      </MyEventsProvider>
    </div>
  );
}

export default Home;
