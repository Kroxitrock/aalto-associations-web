import EventHeader from "@/components/EventHeader";
import MemberList from "@/components/MembersList";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  LeftView,
  RightView,
  SplitView,
  ViewContent,
  ViewTitle,
} from "@/components/ui/splitView";
import { useEvent } from "@/contexts/EventContext";
import { CalendarIcon, EuroIcon, MapPin, Pencil } from "lucide-react";
import { useParams } from "react-router-dom";
import CircleChip from "@/components/ui/eventcirclechip";
import EventProvider from "@/provider/EventProvider";
import EventParticipantsProvider from "@/provider/EventParticipantsProvider";
import AssociationDetailsProvider from "@/provider/AssociationDetailsProvider";
import { useAssociationDetails } from "@/contexts/AssociationDetailsContext";
import { AssociationRoleEnum } from "@/model/association";

//TODO: Join btn visible when user joined
function EventDetails() {
  const { id } = useParams();
  if (!id) {
    throw new Error("No event ID provided in the URL");
  }
  const eventId = parseInt(id, 10);
  return (
    <EventProvider eventId={eventId}>
      <EventDetailsContent />
    </EventProvider>
  );
}

function EventDetailsContent() {
  const { data, isPending, error } = useEvent();

  return (
    <div>
      {isPending && <p>Loading event...</p>}
      {error && <p>Error fetching event!</p>}
      {data && data.id && (
        <div className="flex flex-col items-center justify-between">
          <EventHeader />
          <Card className="bg-black">
            {data.date && (
              <CircleChip
                icon={<CalendarIcon className="h-12 w-12" />}
                title={formatDateTime(data.date)}
              />
            )}

            {data.location !== null && (
              <CircleChip
                icon={<MapPin className="h-12 w-12" />}
                title={data.location}
              />
            )}
            {data.price !== null && (
              <CircleChip
                icon={<EuroIcon className="h-12 w-12" />}
                title={data.price === 0 ? "Free" : data.price.toString()}
              />
            )}
          </Card>

          <SplitView>
            <LeftView>
              <ViewTitle>Description</ViewTitle>
              <ViewContent> {data.description}</ViewContent>
            </LeftView>
            <RightView>
              <EventParticipantsProvider eventId={data.id}>
                <MemberList />
              </EventParticipantsProvider>
            </RightView>
          </SplitView>
          <AssociationDetailsProvider associationId={data.association.id}>
            <ActionButton />
          </AssociationDetailsProvider>
        </div>
      )}
    </div>
  );
}

function ActionButton() {
  const { data: association } = useAssociationDetails();
  const role = association?.role;

  return (
    <div>
      {role === AssociationRoleEnum.MEMBER && (
        <Button
          variant="action"
          className="mb-4 fixed bottom-4 left-1/2 transform -translate-x-1/2"
        >
          Join
        </Button>
      )}

      {/* TODO: Maybe change the possition of the btn */}
      {/* TODO: Status joined is missing */}
      {role === AssociationRoleEnum.LEADER && (
        <Button
          variant="icon"
          className="mb-4 fixed bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </Button>
      )}
    </div>
  );
}

function formatDateTime(dateString: Date) {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);

  return (
    <>
      {formattedDate}
      <br />
      {formattedTime}
    </>
  );
}

export default EventDetails;
