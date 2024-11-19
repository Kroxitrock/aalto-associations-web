import { useEvent } from "@/context/EventContext";
import { Card, CardImage, CardTitle } from "./ui/card";

function EventHeader() {
  const { data } = useEvent();
  return (
    <Card className="relative flex items-center justify-center p-4 w-full h-40">
      <CardImage
        src={data?.picture}
        alt={data?.title}
        className="absolute inset-0 w-full h-full md:w-full object-cover opacity-20"
      />
      <CardTitle className="relative text-3xl text-center mt-4 font-extrabold">
        {data?.title}
      </CardTitle>
    </Card>
  );
}

export default EventHeader;
