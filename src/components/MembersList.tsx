import { useEventParticipants } from "@/contexts/EventParticipantsContext";
import { CardImage } from "./ui/card";
import { Category, CategoryItem, CategoryTitle } from "./ui/category";
import { ViewTitle } from "./ui/splitView";

function MemberList() {
  const { data, isPending, error } = useEventParticipants();

  return (
    // TODO: Add better scroll bar. Maybe use shadcn component
    <div>
      {isPending && <p>Loading participants...</p>}
      {error && <p>Error fetching participants!</p>}
      {data?.length == 0 && <p>No participants yet.</p>}
      <div className="overflow-y-auto max-h-96">
        <ViewTitle>Participants - {data?.length} </ViewTitle>
        <Category>
          {data?.map((participant, index) => (
            <CategoryItem
              key={participant.id}
              className={`flex items-center p-4 ${
                index % 2 === 0 ? "bg-shadowDark" : "bg-shadowDark-light"
              }`}
            >
              {participant.name}
            </CategoryItem>
          ))}
        </Category>
      </div>
    </div>
  );
}

export default MemberList;
