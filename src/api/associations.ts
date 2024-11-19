import { Association, AssociationFilter } from "@/model/association";
import axios from "axios";

const path = "/associations";

export function getAssociations(
  filter?: AssociationFilter
): Promise<Association[]> {
  return axios
    .get(import.meta.env.VITE_API_URL + path, { params: filter })
    .then((response) => response.data as Association[]);
}