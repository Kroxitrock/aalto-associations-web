import { getMyAssociations } from "@/api/user";
import { useQuery } from "@tanstack/react-query";

export function useGetMyAssociations() {
  return useQuery({
    queryKey: ["associations"],
    queryFn: () => getMyAssociations(),
  });
}
