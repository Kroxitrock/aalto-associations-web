import { getAssociationDetails } from "@/api/associations";
import { useQuery } from "@tanstack/react-query";

export function useGetAssociationDetails(associationId: number) {
  return useQuery({
    queryKey: ["association-details", associationId],
    queryFn: () => getAssociationDetails(associationId),
  });
}
