import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import HeaderAssociationSearch from "./HeaderAssociationSearch";

function Header() {
  return (
    // TODO: Add on click on the logo to go to home
    <header className="flex justify-between items-center pb-4">
      <div className="text-2xl font-bold">A! Associations</div>

      <div className="flex items-center gap-4">
        <HeaderAssociationSearch />
        {/* TODO: Add an if to change button to log-in / log out if user is logged in*/}
        <Button className="flex items-center gap-2 text-sm whitespace-nowrap">
          <LogIn className="h-4 w-4" />
          Log In
        </Button>
      </div>
    </header>
  );
}

export default Header;
