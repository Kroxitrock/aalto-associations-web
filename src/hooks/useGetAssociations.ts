import { getAssociations } from "@/api/associations";
import { useQuery } from "@tanstack/react-query";

export function useGetAssociations() {
  return useQuery({
    queryKey: ["associations"],
    queryFn: getAssociations,
  });
}
