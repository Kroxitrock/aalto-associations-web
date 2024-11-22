import {
  Card,
  CardDescription,
  CardFooter,
  CardImage,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMyEvents } from "@/contexts/MyEventsContext";
import { useAssociationEvents } from "@/contexts/AssociationEventsContext";
import { EventListType, UpcomingEventDto } from "@/model/event";

type Props = {
  provider: EventListType;
};

function EventList({ provider }: Props) {
  const { data } =
    provider === EventListType.MY_EVENTS
      ? useMyEvents()
      : useAssociationEvents();

  const navigate = useNavigate();
  const navigateEvent = (eventId: number) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <>
      {/* TODO: Event should be order by date... maybe in backeng */}
      {data?.map((event: UpcomingEventDto) => (
        <Card
          onClick={() => navigateEvent(event.id)}
          key={event.id}
          className="cursor-pointer"
        >
          <CardImage src={event.picture} alt={event.title} />
          <div className="flex flex-col p-4 leading-normal w-full">
            <div className="flex flex-row gap-2 justify-between leading-normal">
              <CardTitle>{event.title}</CardTitle>
              {!event.joined && <Button variant="action">Join</Button>}
              {event.joined && (
                <Button variant="icon">
                  <Check className="h-4 w-4" /> Joined
                </Button>
              )}
            </div>
            <CardDescription className="mt-4 max-h-16 line-clamp-3">
              {event.description}
            </CardDescription>
            <div className="flex justify-between items-center mt-auto">
              <CardFooter className="flex items-center justify-start mt-auto">
                {new Date(event.date).toLocaleString()}
              </CardFooter>
              {event.location && (
                <CardFooter>
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </CardFooter>
              )}
            </div>
          </div>
          {event.capacity !== null && (
            <CardDescription className="flex items-center md:justify-center md:border-l border-white w-40 ">
              <div className="flex flex-row pl-4 md:pl-0">
                <User className="h-4 w-4" />
                {/* TODO: Load signed participants */}
                0/{event.capacity}
              </div>
            </CardDescription>
          )}
        </Card>
      ))}
    </>
  );
}

export default EventList;
