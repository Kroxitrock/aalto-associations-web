import Event from "../model/event";
import { getEvents } from "../api/event";
import { useQuery } from "@tanstack/react-query";

function EventList() {
  const {
    data: events,
    error,
    isLoading,
  } = useQuery({ queryKey: ["eventsData"], queryFn: getEvents });

  if (error) {
    return <p> Error message: {(error as Error).message} </p>;
  }

  if (isLoading) {
    return <p> Loading </p>;
  }

  if (events)
    return (
      <>
        {events.map((event: Event) => (
          <div
            key={event.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "24px",
              backgroundColor: "#AEAEAE",
              padding: "12px",
              marginTop: "12px",
            }}
          >
            <div
              style={{
                aspectRatio: "4 / 3", // Enforce a 4:3 ratio
                width: "30%", // Set the width
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={event.picture}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ textAlign: "left" }}>
              <p>{event.title}</p>
              <p>{event.description}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p>{new Date(event.date).toLocaleDateString()}</p>
                <p>{event.location}</p>
              </div>
            </div>
            <div>
              <p>Capacity:</p>
              <p>{event.capacity}</p>
            </div>
          </div>
        ))}
      </>
    );

  return <p> Events are missing</p>;
}

export default EventList;
