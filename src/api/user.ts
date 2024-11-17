import axios from "axios";
import User from "../model/user";

const path = "/users";

export async function getUsers(): Promise<User[]> {
  return axios
    .get(import.meta.env.VITE_API_URL + path)
    .then((response) => response.data as User[]);
}
