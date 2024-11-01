import User from "../model/user";
import { getUsers } from "../api/user";
import { useQuery } from "react-query";

function UserList() {
  const { data: users, error, isLoading } = useQuery("usersData", getUsers);

  if (error) {
    return <p> Error message: {(error as Error).message} </p>;
  }

  if (isLoading) {
    return <p> Loading </p>;
  }

  if (users)
    return (
      <>
        {users.map((user: User) => (
          <p> {user.name} </p>
        ))}
      </>
    );

  return <p> Users are missing</p>;
}

export default UserList;
