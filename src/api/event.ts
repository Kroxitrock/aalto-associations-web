import axios from "axios";
import Event from "../model/event";

const path = "/event";

export async function getEvents(): Promise<Event[]> {
  const response = await axios.get(process.env.API_URL + path);
  return response.data;
}
