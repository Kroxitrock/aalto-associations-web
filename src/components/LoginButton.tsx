import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { Button } from "./ui/button";

export default function LoginButton() {
  const navigate = useNavigate();

  return (
    <Button
      className="flex items-center gap-2 text-sm whitespace-nowrap"
      onClick={() => navigate("/login")}
    >
      <LogIn className="h-4 w-4" />
      Log In
    </Button>
  );
}
