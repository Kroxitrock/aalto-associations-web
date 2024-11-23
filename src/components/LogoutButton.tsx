import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import useAuthorization from "@/hooks/useAuthorization";

export default function LogoutButton() {
  const navigate = useNavigate();
  const { logOut } = useAuthorization();

  const logOutAndNavigateHome = () => {
    logOut();
    navigate("/associations");
  };

  return (
    <Button
      className="flex items-center gap-2 text-sm whitespace-nowrap"
      onClick={logOutAndNavigateHome}
    >
      <LogOut className="h-4 w-4" />
      Log Out
    </Button>
  );
}
