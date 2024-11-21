import User from "@/model/user";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { createContext, useContext } from "react";

interface Props {
  data?: User[];
  isPending: boolean;
  error: Error | null;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
}

export const EventParticipantsContext = createContext<Props | undefined>(
  undefined
);

export function useEventParticipants() {
  const context = useContext(EventParticipantsContext);

  if (context === undefined) {
    throw new Error(
      "useEventParticipants must be used within a EventParticipantsProvider"
    );
  }
  return context;
}
