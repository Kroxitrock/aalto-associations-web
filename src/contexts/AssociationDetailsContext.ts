import { createContext, useContext } from "react";
import { Association } from "@/model/association";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

interface Props {
  data?: Association;
  isPending: boolean;
  error: Error | null;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
}

export const AssociationDetailsContext = createContext<Props | null>(null);

export const useAssociationDetails = () => {
  const context = useContext(AssociationDetailsContext);
  if (!context) {
    throw new Error(
      "useAssociationDetails must be used within an AssociationDetailsProvider"
    );
  }
  return context;
};
