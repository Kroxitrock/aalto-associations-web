import axios from "axios";
import User from "../model/user";

const path = "/users";

export async function getUsers(): Promise<User[]> {
  const response = await axios.get(process.env.API_URL + path);
  return response.data;
}
