import Event from "@/model/event";
import axios from "axios";

export function getAssociationEvents(associationId: number): Promise<Event[]> {
  const path = `/associations/${associationId}/events`;
  return axios
    .get(import.meta.env.VITE_API_URL + path)
    .then((response) => response.data as Event[]);
}
