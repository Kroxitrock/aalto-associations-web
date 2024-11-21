import { EventParticipantsContext } from "@/contexts/EventParticipantsContext";
import { useGetEventParticipants } from "@/hooks/useGetEventParticipantsById";

interface Props {
  eventId: number;
  children: React.ReactNode;
}

export default function EventParticipantsProvider({
  eventId,
  children,
}: Props) {
  const { data, isPending, error, refetch } = useGetEventParticipants(eventId);

  return (
    <EventParticipantsContext.Provider
      value={{ data, isPending, error, refetch }}
    >
      {children}
    </EventParticipantsContext.Provider>
  );
}
