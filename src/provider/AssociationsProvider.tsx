import { AssociationsContext } from "@/contexts/AssociationsContext";
import { useGetAssociations } from "@/hooks/useGetAssociations";
import { AssociationFilter } from "@/model/association";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function AssociationsProvider({ children }: Props) {
  const [filter, setFilter] = useState<AssociationFilter>({ nameSearch: "" });

  const { data, isPending, error, refetch } = useGetAssociations(filter);

  return (
    <AssociationsContext.Provider
      value={{ data, isPending, error, refetch, filter, setFilter }}
    >
      {children}
    </AssociationsContext.Provider>
  );
}
