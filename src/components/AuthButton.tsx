import useAuthorization from "@/hooks/useAuthorization";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

export default function AuthButton() {
  const { isAuthorized } = useAuthorization();

  if (isAuthorized()) {
    return <LogoutButton />;
  }
  return <LoginButton />;
}
