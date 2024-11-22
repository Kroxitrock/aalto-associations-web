import { useAssociations } from "@/contexts/AssociationsContext";
import { useState, useEffect } from "react";
import SearchBar from "./ui/searchBar";

interface Props {
  initialSearch?: string;
}

export default function AssociationSearch({ initialSearch = "" }: Props) {
  const [searchValue, setSearchValue] = useState(initialSearch);
  const { filter, setFilter, refetch } = useAssociations();

  useEffect(() => {
    // Automatically perform search if initialSearch is provided
    if (initialSearch) {
      setFilter({ ...filter, nameSearch: initialSearch });
      setTimeout(refetch);
    }
  }, [initialSearch, setFilter, refetch]);

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
