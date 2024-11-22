import { useMyAssociations } from "@/contexts/MyAssociationsContext";
import { Button } from "./ui/button";
import { Card, CardContent, CardImage } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useNavigate } from "react-router-dom";

// TODO: IMPORTANT Bug - first it loads all associations, then when you select "View details" and return back to the home page, only my ass are visible
function AssociationsCarousel() {
  const { data, isPending, error } = useMyAssociations();
  const navigate = useNavigate();
  const navigateAssociation = (associationId: number) => {
    navigate(`/associations/${associationId}/events`);
  };

  const navigateAllAssociations = () => {
    navigate(`/associations/`);
  };
  return (
    <div>
      {isPending && <p>Loading associations...</p>}
      {error && <p>Error fetching associations!</p>}

      <Carousel
        opts={{
          align: "start",
        }}
        className="lg:max-w-5xl bg-shadowDark"
      >
        <CarouselContent className="flex justify-center items-center min-h-20">
          {data?.length === 0 && (
            <Button onClick={() => navigateAllAssociations()}>
              Explore associations
            </Button>
          )}
          {data?.map((association) => (
            <CarouselItem
              key={association.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <div className="p-3">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-1 flex-col max-h-50">
                    <CardImage
                      className="w-20"
                      src={association.logo}
                      alt={association.logo}
                    />
                    <Button
                      className="mt-4 text-xs"
                      onClick={() => navigateAssociation(association.id)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default AssociationsCarousel;
