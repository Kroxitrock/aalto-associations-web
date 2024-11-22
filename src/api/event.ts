import Event from "../model/event";
import User from "@/model/user";
import axiosInstance from "./axiosConfig";

const path = "/events";

export function getEvents(): Promise<Event[]> {
  return axiosInstance.get(path).then((response) => response.data as Event[]);
}

export function getEventById(id: number): Promise<Event> {
  return axiosInstance
    .get(`${path}/${id}`)
    .then((response) => response.data as Event);
}

export function getEventParticipants(id: number): Promise<User[]> {
  return axiosInstance
    .get(`${path}/${id}/participants`)
    .then((response) => response.data as User[]);
}
