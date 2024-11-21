import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Association } from "@/model/association";

const getAssociationDetails = async (id: number): Promise<Association> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/associations/${id}`
  );
  return response.data;
};

export function useGetAssociationDetails(associationId: number) {
  return useQuery({
    queryKey: ["association-details", associationId],
    queryFn: () => getAssociationDetails(associationId),
  });
}
