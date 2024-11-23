import { AssociationDetailsContext } from "@/contexts/AssociationDetailsContext";
import { useGetAssociationDetails } from "@/hooks/useGetAssociationDetails";

interface AssociationProviderProps {
  associationId: number;
  children: React.ReactNode;
}

export default function AssociationDetailsProvider({
  associationId,
  children,
}: AssociationProviderProps) {
  const { data, isPending, error, refetch } =
    useGetAssociationDetails(associationId);

  return (
    <AssociationDetailsContext.Provider
      value={{ data, isPending, error, refetch }}
    >
      {children}
    </AssociationDetailsContext.Provider>
  );
}
