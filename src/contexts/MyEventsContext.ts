import Event from "@/model/event";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { createContext, useContext } from "react";

interface Props {
  data?: Event[];
  isPending: boolean;
  error: Error | null;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
}

export const MyEventsContext = createContext<Props | undefined>(undefined);

export function useMyEvents() {
  const context = useContext(MyEventsContext);

  if (context === undefined) {
    throw new Error("useMyEvents must be used within a MyEventsProvider");
  }
  return context;
}
