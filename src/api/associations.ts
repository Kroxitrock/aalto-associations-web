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

export function joinAssociation(associationId: number) {
  return axiosInstance.post(`${path}/${associationId}/join`);
}

export function createAssociation(association: Association) {
  return axiosInstance.post(path, association);
}

export function updateAssociation(
  association: Association,
  associationId: number
) {
  return axiosInstance.put(`${path}/${associationId}`, association);
}

export function getAssociationDetails(id: number): Promise<Association> {
  return axiosInstance
    .get(`${import.meta.env.VITE_API_URL}/associations/${id}`)
    .then((response) => response.data as Association);
}
