import { getAssociations } from "@/api/associations";
import { AssociationFilter } from "@/model/association";
import { useQuery } from "@tanstack/react-query";

export function useGetAssociations(filter?: AssociationFilter) {
  return useQuery({
    queryKey: ["associations"],
    queryFn: () => getAssociations(filter),
  });
}
