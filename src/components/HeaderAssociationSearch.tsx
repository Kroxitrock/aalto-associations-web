import { useState } from "react";
import SearchBar from "./ui/searchBar";
import { useNavigate } from "react-router-dom";

export default function HeaderAssociationSearch() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const search = () => {navigate(`/associations/`); };

  return (
    <div className="w-full flex flex-row justify-start">
      <SearchBar
        value={searchValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(event.target.value)
        }
        onClick={search}
        placeholder="Search by name..."
      ></SearchBar>
    </div>
  );
}
