import "./Home.css";
import EventList from "@/components/EventList";
import AssociationsCarousel from "@/components/AssociationsCarousel";
import { CardTitle } from "@/components/ui/card";
import { MyAssociationsProvider } from "@/provider/MyAssociationsProvider";
import { MyEventsProvider } from "@/provider/MyEventProvider";
import { EventListType } from "@/model/event";
import useAuthorization from "@/hooks/useAuthorization";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const { isAuthorized, setAuthorizationToken } = useAuthorization();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  console.log(searchParams.get("token"));

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      setAuthorizationToken(token);
    }
    if (!isAuthorized()) {
      navigate("/associations");
    }
  }, [searchParams, isAuthorized, navigate]);

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
