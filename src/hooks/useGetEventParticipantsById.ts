import { getEventParticipants } from "@/api/event";
import { useQuery } from "@tanstack/react-query";

export function useGetEventParticipants(eventId: number) {
  return useQuery({
    queryKey: ["eventParticipants"],
    queryFn: () => getEventParticipants(eventId),
  });
}
