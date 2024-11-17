import axios from "axios";
import Event from "../model/event";

const path = "/event";

export function getEvents(): Promise<Event[]> {
  return axios
    .get(import.meta.env.VITE_API_URL + path)
    .then((response) => response.data as Event[]);
}
