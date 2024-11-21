import { MyEventsContext } from "@/contexts/MyEventsContext";
import { useGetMyEvents } from "@/hooks/useGetMyEvents";

interface Props {
  children: React.ReactNode;
}

export function MyEventsProvider({ children }: Props) {
  const { data, isPending, error, refetch } = useGetMyEvents();

  return (
    <MyEventsContext.Provider value={{ data, isPending, error, refetch }}>
      {children}
    </MyEventsContext.Provider>
  );
}
