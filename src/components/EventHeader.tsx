import { Card, CardImage, CardTitle } from "./ui/card";

function EventHeader() {
  return (
    <Card className="relative flex items-center justify-center p-4 w-full h-40">
      <CardImage
        src="https://waterfrontparkseattle.org/wp-content/uploads/2022/07/2021-08-31_HL_DancingtilDusk_WebRes_AdamLu_HO3C1249-1440x960.jpg"
        alt="Aalto Salsa logo"
        className="absolute inset-0 w-full h-full md:w-full object-cover opacity-30"
      />
      <CardTitle className="relative text-3xl text-center mt-4 font-extrabold">
        Aalto Salsa Society ry
      </CardTitle>
    </Card>
  );
}

export default EventHeader;
