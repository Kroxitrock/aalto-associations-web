import { createContext, useContext } from "react";
import { useGetAssociationDetails } from "@/hooks/useGetAssociationDetails";

interface AssociationContextType {
  data: any;
  isLoading: boolean;
  error: any;
}

const AssociationContext = createContext<AssociationContextType | null>(null);

interface AssociationProviderProps {
  associationId: number;
  children: React.ReactNode;
}

export const AssociationProvider = ({
  associationId,
  children,
}: AssociationProviderProps) => {
  const { data, isLoading, error } = useGetAssociationDetails(associationId);

  return (
    <AssociationContext.Provider value={{ data, isLoading, error }}>
      {children}
    </AssociationContext.Provider>
  );
};

export const useAssociation = () => {
  const context = useContext(AssociationContext);
  if (!context) {
    throw new Error(
      "useAssociation must be used within an AssociationProvider"
    );
  }
  return context;
};
