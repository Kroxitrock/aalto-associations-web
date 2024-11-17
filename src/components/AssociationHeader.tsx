import { Card, CardImage, CardTitle } from "./ui/card";

function AssociationHeader() {
  return (
    <Card className="flex items-center justify-center p-4 w-full">
      <div className="flex flex-col items-center justify-center">
        <CardImage
          className="md:w-40"
          src="https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_567w_ah_n/public/2024-09/Aalto_Salsa_Society.png?itok=moApesrS"
          alt="Aalto Salsa logo"
        />
        <CardTitle className="text-3xl text-center mt-4">
          Aalto Salsa Society ry
        </CardTitle>
      </div>
    </Card>
  );
}

export default AssociationHeader;
