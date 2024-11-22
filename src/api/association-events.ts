import { UpcomingEventDto } from "@/model/event";
import axios from "axios";

export function getAssociationEvents(
  associationId: number
): Promise<UpcomingEventDto[]> {
  const path = `/associations/${associationId}/events`;
  return axios
    .get(import.meta.env.VITE_API_URL + path)
    .then((response) => response.data as UpcomingEventDto[]);
}
