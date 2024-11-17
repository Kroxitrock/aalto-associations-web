import ContactInfo from "./ContactInfo";

function AssociationAbout() {
  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="sm:flex-[3] p-4">
        <p className="text-2xl mb-4">Desciption</p>
        <p className="whitespace-pre-line text-sm">
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
        </p>
      </div>
      <div className="sm:flex-[2] flex-1 bg-shadowDark m-4 p-4">
        <ContactInfo />
      </div>
    </div>
  );
}

export default AssociationAbout;
