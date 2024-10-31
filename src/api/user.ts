import axios from "axios";
import User from "../model/user";

const path = "/users";

export async function getUsers(): Promise<User[]> {
  const response = await axios.get("http://localhost:3000" + path);
  return response.data;
}
