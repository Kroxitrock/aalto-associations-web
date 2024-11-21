import { useGetAssociationDetails } from "@/hooks/useGetAssociationDetails";
import AssociationContext from "@/contexts/AssociationContext";

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
