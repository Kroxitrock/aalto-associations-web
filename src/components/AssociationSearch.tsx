import { useAssociations } from "@/contexts/AssociationsContext";
import { useState } from "react";
import SearchBar from "./ui/searchBar";

export default function AssociationSearch() {
  const [searchValue, setSearchValue] = useState("");
  const { filter, setFilter, refetch } = useAssociations();

  const search = () => {
    setFilter({ ...filter, nameSearch: searchValue });
    setTimeout(refetch);
  };

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
