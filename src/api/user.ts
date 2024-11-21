import axios from "axios";
import User from "../model/user";
import { Association } from "@/model/association";
import Event from "@/model/event";

const path = "/users";

export async function getUsers(): Promise<User[]> {
  return axios
    .get(import.meta.env.VITE_API_URL + path)
    .then((response) => response.data as User[]);
}

export function getMyAssociations(): Promise<Association[]> {
  return axios
    .get(import.meta.env.VITE_API_URL + path + "/me/associations")
    .then((response) => response.data as Association[]);
}

export function getMyEvents(): Promise<Event[]> {
  return axios
    .get(import.meta.env.VITE_API_URL + path + "/me/events")
    .then((response) => response.data as Event[]);
}
