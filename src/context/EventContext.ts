import Event from "@/model/event";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { createContext, useContext } from "react";

interface Props {
  data?: Event;
  isPending: boolean;
  error: Error | null;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
}

export const EventContext = createContext<Props | undefined>(undefined);

export function useEvent() {
  const context = useContext(EventContext);

  if (context === undefined) {
    throw new Error("useEvent must be used within a EventProvider");
  }
  return context;
}
