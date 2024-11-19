import React from "react";
import { Input } from "./input";
import { SearchIcon } from "./searchIcon";

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export default function SearchBar({
  placeholder,
  value,
  onChange,
  onClick,
}: Props) {
  return (
    <div className="flex items-center p-2 bg-black border ml-2">
      <Input
        value={value}
        onChange={onChange}
        onSubmit={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onClick?.();
          }
        }}
        type="text"
        placeholder={placeholder}
        className="flex-1 text-white bg-transparent border-none"
      />
      <SearchIcon className="text-white cursor-pointer" onClick={onClick} />
    </div>
  );
}
