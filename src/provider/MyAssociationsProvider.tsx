import { MyAssociationsContext } from "@/contexts/MyAssociationsContext";
import { useGetMyAssociations } from "@/hooks/useGetMyAssociations";

interface Props {
  children: React.ReactNode;
}

export function MyAssociationsProvider({ children }: Props) {
  const { data, isPending, error, refetch } = useGetMyAssociations();

  return (
    <MyAssociationsContext.Provider value={{ data, isPending, error, refetch }}>
      {children}
    </MyAssociationsContext.Provider>
  );
}
