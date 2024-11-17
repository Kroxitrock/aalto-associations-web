import { Association } from "@/model/association";
import axios from "axios";

const path = "/associations";

export function getAssociations(): Promise<Association[]> {
  return axios
    .get(import.meta.env.VITE_API_URL + path)
    .then((response) => response.data as Association[]);
}
