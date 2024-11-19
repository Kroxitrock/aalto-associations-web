import { getAssociationEvents } from "@/api/association-events";
import { useQuery } from "@tanstack/react-query";

export function useGetAssociationEvents(associationId: number) {
  return useQuery({
    queryKey: ["association-events", associationId],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return getAssociationEvents(id as number);
    },
  });
}