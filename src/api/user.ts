import User from "../model/user";
import { Association, AssociationRoleEnum } from "@/model/association";
import { UpcomingEventDto } from "@/model/event";
import axiosInstance from "./axiosConfig";

const path = "/users";

export async function getUsers(): Promise<User[]> {
  return axiosInstance.get(path).then((response) => response.data as User[]);
}
export function getMyAssociations(): Promise<Association[]> {
  return axiosInstance
    .get(path + "/me/associations")
    .then((response) => response.data as Association[]);
}

export function getMyRoleForAssociation(
  associationId: number
): Promise<AssociationRoleEnum> {
  return axiosInstance
    .get(`${path}/me/associations/${associationId}/role`)
    .then((response) => response.data as AssociationRoleEnum);
}

export function getMyEvents(): Promise<UpcomingEventDto[]> {
  return axiosInstance
    .get(path + "/me/associations/events/upcoming")
    .then((response) => response.data as UpcomingEventDto[]);
}
