import useAuthorization from "@/hooks/useAuthorization";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useEffect, useState } from "react";

export default function AuthButton() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { isAuthorized } = useAuthorization();

  useEffect(() => {
    setLoggedIn(isAuthorized());
  }, [loggedIn, isAuthorized]);

  if (loggedIn) {
    return <LogoutButton />;
  }
  return <LoginButton />;
}
