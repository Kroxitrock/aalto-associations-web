import { UpcomingEventDto } from "@/model/event";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { createContext, useContext } from "react";

interface Props {
  data?: UpcomingEventDto[];
  isPending: boolean;
  error: Error | null;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
}

export const AssociationEventsContext = createContext<Props | undefined>(
  undefined
);

export function useAssociationEvents() {
  const context = useContext(AssociationEventsContext);

  if (context === undefined) {
    throw new Error(
      "useAssociationEvents must be used within a AssociationEventProvider"
    );
  }
  return context;
}
