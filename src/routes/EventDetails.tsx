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
import { useEvent } from "@/context/EventContext";
import { EventProvider } from "@/provider/EventProvider";
import { CalendarIcon, EuroIcon, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import CircleChip from "@/components/ui/eventcirclechip";

function EventDetails() {
  const { id } = useParams();
  if (!id) {
    throw new Error("No association ID provided in the URL");
  }
  const eventId = parseInt(id, 10);
  return (
    <EventProvider eventId={eventId}>
      <EventDetailsContent />
    </EventProvider>
  );
}

function EventDetailsContent() {
  const { data } = useEvent();

  return (
    <div className="flex flex-col items-center justify-between">
      <EventHeader />
      <Card className="bg-black">
        {data?.date && (
          <CircleChip
            icon={<CalendarIcon className="h-12 w-12" />}
            title={formatDateTime(data.date)}
          />
        )}

        {data?.location !== null && (
          <CircleChip
            icon={<MapPin className="h-12 w-12" />}
            title={data?.location}
          />
        )}

        {/* Replace price with "Free" if 0 */}
        {data?.price !== null && (
          <CircleChip
            icon={<EuroIcon className="h-12 w-12" />}
            title={data?.price === 0 ? "Free" : data?.price.toString()}
          />
        )}
      </Card>

      <SplitView>
        <LeftView>
          <ViewTitle>Desciption</ViewTitle>
          <ViewContent> {data?.description}</ViewContent>
        </LeftView>
        <RightView>
          <ViewTitle>Participants</ViewTitle>
          {/* TODO: Load from db */}
          <MemberList />
        </RightView>
      </SplitView>

      {/* TODO: Fix the place of the button to be on the bottom  */}
      <Button variant="action" className="mb-4">
        Join
      </Button>
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
