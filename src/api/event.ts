import axios from "axios";
import Event from "../model/event";
import User from "@/model/user";

const path = "/events";

export function getEvents(): Promise<Event[]> {
  return axios
    .get(import.meta.env.VITE_API_URL + path)
    .then((response) => response.data as Event[]);
}

export function getEventById(id: number): Promise<Event> {
  return axios
    .get(`${import.meta.env.VITE_API_URL}${path}/${id}`)
    .then((response) => response.data as Event);
}

export function getEventParticipants(id: number): Promise<User[]> {
  return axios
    .get(`${import.meta.env.VITE_API_URL}${path}/${id}/participants`)
    .then((response) => response.data as User[]);
}

export function joinEvent(eventId: number) {
  return axios.post(`${import.meta.env.VITE_API_URL}${path}/${eventId}/join`);
}
