import { getMyEvents } from "@/api/user";
import { useQuery } from "@tanstack/react-query";

export function useGetMyEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => getMyEvents(),
  });
}
