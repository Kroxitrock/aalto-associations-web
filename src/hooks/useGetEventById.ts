import { getEventById } from "@/api/event";
import { useQuery } from "@tanstack/react-query";

export function useGetEventById(eventId: number) {
  return useQuery({
    queryKey: ["event", eventId],
    queryFn: () => getEventById(eventId),
  });
}
