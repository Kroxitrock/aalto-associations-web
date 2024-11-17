import { AssociationsContext } from "@/contexts/AssociationsContext";
import { useGetAssociations } from "@/hooks/useGetAssociations";

interface Props {
  children: React.ReactNode;
}

export function AssociationsProvider({ children }: Props) {
  const { data, isPending, error, refetch } = useGetAssociations();

  return (
    <AssociationsContext.Provider value={{ data, isPending, error, refetch }}>
      {children}
    </AssociationsContext.Provider>
  );
}
