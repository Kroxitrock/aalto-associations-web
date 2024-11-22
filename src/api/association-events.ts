import { UpcomingEventDto } from "@/model/event";
import axiosInstance from "./axiosConfig";

export function getAssociationEvents(
  associationId: number
): Promise<UpcomingEventDto[]> {
  return axiosInstance
    .get(`/associations/${associationId}/events`)
    .then((response) => response.data as UpcomingEventDto[]);
}
