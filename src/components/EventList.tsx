import {
  Card,
  CardDescription,
  CardFooter,
  CardImage,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check, MapPin, Pencil, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMyEvents } from "@/contexts/MyEventsContext";
import { useAssociationEvents } from "@/contexts/AssociationEventsContext";
import { EventListType, UpcomingEventDto } from "@/model/event";
import { useMutation } from "@tanstack/react-query";
import { joinEvent } from "@/api/event";
import { useToast } from "@/hooks/use-toast";
import { useAssociationDetails } from "@/contexts/AssociationDetailsContext";
import { AssociationRoleEnum } from "@/model/association";

type Props = {
  provider: EventListType;
};

function EventList({ provider }: Props) {
  const { data: events, refetch } =
    provider === EventListType.MY_EVENTS
      ? useMyEvents()
      : useAssociationEvents();

  let associationRole: AssociationRoleEnum | null = AssociationRoleEnum.MEMBER;
  if (provider === EventListType.ASSOCIATION_EVENTS) {
    const { data: association } = useAssociationDetails();
    associationRole = association && association.role ? association.role : null;
  }
  const { toast } = useToast();
  const navigate = useNavigate();
  const navigateEvent = (eventId: number) => {
    navigate(`/events/${eventId}`);
  };

  const { mutate } = useMutation({
    mutationFn: joinEvent,
    onSuccess: () => {
      setTimeout(refetch);
    },
    onError: () => {
      toast({
        duration: 2000,
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    },
  });

  return (
    <>
      {events?.map((event: UpcomingEventDto) => (
        <Card
          onClick={() => navigateEvent(event.id)}
          key={event.id}
          className="cursor-pointer"
        >
          <CardImage src={event.picture} alt={event.title} />
          <div className="flex flex-col p-4 leading-normal w-full">
            <div className="flex flex-row gap-2 justify-between leading-normal">
              <CardTitle>{event.title}</CardTitle>
              {!event.joined &&
                associationRole === AssociationRoleEnum.MEMBER && (
                  <Button
                    variant="action"
                    onClick={(e) => {
                      e.stopPropagation();
                      mutate(event.id);
                    }}
                  >
                    Join
                  </Button>
                )}
              {associationRole === AssociationRoleEnum.LEADER && (
                <Button variant="icon">
                  <Pencil className="h-4 w-4" /> Edit
                </Button>
              )}
              {event.joined &&
                associationRole != AssociationRoleEnum.LEADER && (
                  <Button variant="icon">
                    <Check className="h-4 w-4" /> Joined
                  </Button>
                )}
            </div>
            <CardDescription className="mt-4 max-h-16 line-clamp-3">
              {event.description}
            </CardDescription>
            <div className="flex justify-between items-center mt-auto">
              {event.date && (
                <CardFooter className="flex items-center justify-start mt-auto">
                  {new Date(event.date).toLocaleString()}
                </CardFooter>
              )}
              {event.location && (
                <CardFooter>
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </CardFooter>
              )}
            </div>
          </div>

          <CardDescription className="flex items-center md:justify-center md:border-l border-white w-40 ">
            {!event.capacity && (
              <div className="flex flex-row pl-4 md:pl-0">No limit</div>
            )}

            {event.capacity > 0 && event.participants === event.capacity && (
              <div className="flex flex-row pl-4 md:pl-0">Full</div>
            )}

            {event.capacity !== null &&
              event.capacity > 0 &&
              event.participants != event.capacity && (
                <div className="flex flex-row pl-4 md:pl-0">
                  <User className="h-4 w-4 mr-2" />
                  {event.participants}/{event.capacity}
                </div>
              )}
          </CardDescription>
        </Card>
      ))}
    </>
  );
}

export default EventList;
