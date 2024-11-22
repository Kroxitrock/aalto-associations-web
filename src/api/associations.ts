import { Association, AssociationFilter } from "@/model/association";
import axiosInstance from "./axiosConfig";

const path = "/associations";
export function getAssociations(
  filter?: AssociationFilter
): Promise<Association[]> {
  return axiosInstance
    .get(path, { params: filter })
    .then((response) => response.data as Association[]);
}
