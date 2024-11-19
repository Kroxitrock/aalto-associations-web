import Event from "../model/event";
import {
  Card,
  CardDescription,
  CardFooter,
  CardImage,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, User } from "lucide-react";
import { useAssociationEvents } from "@/contexts/AssociationEventsContext";

function EventList() {
  const { data } = useAssociationEvents();

  return (
    <>
      {/* TODO: Event should be order by date... maybe in backeng */}
      {data?.map((event: Event) => (
        <Card key={event.id}>
          <CardImage src={event.picture} alt={event.title} />
          <div className="flex flex-col p-4 leading-normal w-full">
            <div className="flex flex-row gap-2 justify-between leading-normal">
              <CardTitle>{event.title}</CardTitle>
              <Button variant="action">Join</Button>
            </div>
            <CardDescription className="mt-4">
              {event.description}
            </CardDescription>
            <div className="flex justify-between items-center mt-auto">
              <CardFooter className="flex items-center justify-start mt-auto">
                {new Date(event.date).toLocaleString()}
              </CardFooter>
              <CardFooter>
                <MapPin className="h-4 w-4 mr-2" />
                {event.location}
              </CardFooter>
            </div>
          </div>
          {/* TODO: Looking bad on small screens */}
          <CardDescription className="flex items-center justify-center border-l border-white w-40">
            <User className="h-4 w-4" />
            {/* TODO: Load signed participants */}
            0/{event.capacity}
          </CardDescription>
        </Card>
      ))}
    </>
  );
}

export default EventList;
