import EventHeader from "@/components/EventHeader";
import MemberList from "@/components/MembersList";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  LeftView,
  RightView,
  SplitView,
  ViewContent,
  ViewTitle,
} from "@/components/ui/split_view";
import { CalendarIcon, EuroIcon, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";

function EventDetails() {
  const { id } = useParams<{ id: string }>(); //TODO: create an interface Param here
  if (!id) {
    throw new Error("No association ID provided in the URL");
  }
  const eventId = parseInt(id, 10);

  return (
    <div className="flex flex-col items-center justify-between">
      <EventHeader />

      <Card className="bg-black">
        <CardContent className="flex flex-col items-center">
          <div className="h-20 w-20 bg-customYellow rounded-full text-black p-3">
            <CalendarIcon className="h-14 w-14" />
          </div>

          <CardTitle className="text-center mt-4">
            27/10/2024 <br /> 19:30
          </CardTitle>
        </CardContent>

        <CardContent className="flex flex-col items-center">
          <div className="h-20 w-20 bg-customYellow rounded-full text-black p-3">
            <MapPin className="h-14 w-14" />
          </div>

          <CardTitle className="text-center mt-4">JMT1</CardTitle>
        </CardContent>

        <CardContent className="flex flex-col items-center">
          <div className="h-20 w-20 bg-customYellow rounded-full text-black p-3">
            <EuroIcon className="h-14 w-14" />
          </div>
          <CardTitle className="text-center mt-4">Free</CardTitle>
        </CardContent>
      </Card>

      <SplitView>
        <LeftView>
          <ViewTitle>Desciption</ViewTitle>
          <ViewContent>
            {`Aalto Salsa Society ry is a vibrant and dynamic student association dedicated to the passion of salsa dancing.
                Founded at Aalto University, this society has become a thriving community for individuals who love the energy and rhythm of Latin music.

                Our Mission:
                - To create a welcoming and inclusive environment for salsa enthusiasts of all levels.
                - To promote the cultural richness and beauty of salsa dancing.
                - To provide opportunities for members to learn, practice, and perform salsa.

                What We Offer:
                - Regular Salsa Classes: Learn from experienced instructors and master the fundamentals of salsa dancing.
                - Practice Sessions: Refine your skills and connect with fellow dancers in a fun and supportive atmosphere.
                - Social Events: Enjoy salsa parties, socials, and other events to meet new people and celebrate the joy of dancing.`}
          </ViewContent>
        </LeftView>
        <RightView>
          <ViewTitle>Participants</ViewTitle>
          <MemberList />
        </RightView>
      </SplitView>

      {/* TODO: Fix the place of the button to be on the bottom  */}
      <Button variant="action" className="mb-4">
        Join
      </Button>
    </div>
  );
}

export default EventDetails;
