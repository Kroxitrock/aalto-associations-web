import { Association, AssociationFilter } from "@/model/association";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { createContext, useContext } from "react";

interface Props {
  data?: Association[];
  isPending: boolean;
  error: Error | null;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
  filter: AssociationFilter;
  setFilter: (filter: AssociationFilter) => void;
}

export const AssociationsContext = createContext<Props | undefined>(undefined);

export function useAssociations() {
  const context = useContext(AssociationsContext);

  if (context === undefined) {
    throw new Error(
      "useAssociations must be used within a AssociationsProvider"
    );
  }
  return context;
}
