import { AssociationEventsContext } from "@/contexts/AssociationEventsContext";
import { useGetAssociationEvents } from "@/hooks/useGetAssociationEvents";

interface Props {
  associationId: number;
  children: React.ReactNode;
}

export function AssociationEventsProvider({ associationId, children }: Props) {
  const { data, isPending, error, refetch } =
    useGetAssociationEvents(associationId);

  return (
    <AssociationEventsContext.Provider
      value={{ data, isPending, error, refetch }}
    >
      {children}
    </AssociationEventsContext.Provider>
  );
}
