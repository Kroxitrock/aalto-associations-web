import { useNavigate } from "react-router-dom";
import AuthButton from "./AuthButton";
import HeaderAssociationSearch from "./HeaderAssociationSearch";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center pb-4">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate(`/`)}
      >
        A! Associations
      </div>

      <div className="flex items-center gap-4">
        <HeaderAssociationSearch />
        <AuthButton />
      </div>
    </header>
  );
}

export default Header;
