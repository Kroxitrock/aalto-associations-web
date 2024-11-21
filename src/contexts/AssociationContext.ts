import { createContext, useContext } from "react";
import { Association } from "@/model/association";

interface Props {
  data?: Association;
  isLoading: boolean;
  error: Error | null;
}

export const AssociationContext = createContext<AssociationContextType | null>(
  null
);

export const useAssociation = () => {
  const context = useContext(AssociationContext);
  if (!context) {
    throw new Error(
      "useAssociation must be used within an AssociationProvider"
    );
  }
  return context;
};
