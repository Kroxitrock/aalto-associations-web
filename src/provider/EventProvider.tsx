import { EventContext } from "@/context/EventContext";
import { useGetEventById } from "@/hooks/useGetEventById";

interface Props {
  eventId: number;
  children: React.ReactNode;
}

export function EventProvider({ eventId, children }: Props) {
  const { data, isPending, error, refetch } = useGetEventById(eventId);

  return (
    <EventContext.Provider value={{ data, isPending, error, refetch }}>
      {children}
    </EventContext.Provider>
  );
}
