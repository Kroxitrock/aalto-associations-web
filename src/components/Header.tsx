import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import AssociationsProvider from "@/provider/AssociationsProvider";
import HeaderAssociationSearch from "./HeaderAssociationSearch";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black shadow-md">
      <div className="flex items-center gap-2">
        <div className="text-white text-2xl font-bold">A! Associations</div>
      </div>

      <div className="flex items-center gap-4">
        <AssociationsProvider>
          <HeaderAssociationSearch></HeaderAssociationSearch>
        </AssociationsProvider>
        {/* TO-DO: Add an if to change button to log-in / log out if user is logged in*/}
        <Button className="flex items-center gap-2 text-white text-sm whitespace-nowrap px-3 py-1 bg-transparent hover:bg-gray-800">
          <LogIn className="h-4 w-4" />
          Log In
        </Button>
      </div>
    </header>
  );
}

export default Header;
