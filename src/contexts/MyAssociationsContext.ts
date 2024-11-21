import { Association } from "@/model/association";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { createContext, useContext } from "react";

interface Props {
  data?: Association[];
  isPending: boolean;
  error: Error | null;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
}

export const MyAssociationsContext = createContext<Props | undefined>(
  undefined
);

export function useMyAssociations() {
  const context = useContext(MyAssociationsContext);

  if (context === undefined) {
    throw new Error(
      "useMyAssociations must be used within a MyAssociationsProvider"
    );
  }
  return context;
}
