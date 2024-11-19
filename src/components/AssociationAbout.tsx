import ContactInfo from "./ContactInfo";
import {
  LeftView,
  RightView,
  SplitView,
  ViewContent,
  ViewTitle,
} from "@/components/ui/split_view";

function AssociationAbout() {
  //{data} = useAssociationDetails()
  return (
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
        <ViewTitle>Contacts</ViewTitle>
        <ContactInfo />
      </RightView>
    </SplitView>
  );
}

export default AssociationAbout;
