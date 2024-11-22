import AssociationList from "@/components/AssociationList";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import AssociationSearch from "@/components/AssociationSearch";
import { useLocation } from "react-router-dom";
import AssociationsProvider from "@/provider/AssociationsProvider";

export default function Associations() {
  const location = useLocation();
  const initialSearch = location.state?.search || "";

  return (
    <div className="flex flex-col items-center justify-start w-full md:max-w-4xl mx-auto">
      <Card className="bg-transparent w-full">
        <div className="flex flex-col p-4 leading-normal text-left">
          <CardTitle>Associations</CardTitle>
          <CardDescription className="mt-4">
            You can discover a variety of activities within AYY! Continue an old
            hobby or start a completely new one, find like-minded friends, learn
            and gain experiences! There are more than 200 associations operating
            within AYY, so the range of activities is extensive, spanning from
            choir singing to climbing and from card games to sailing and Finnish
            baseball. If you cannot find an interesting association from among
            the existing ones, you can always establish your own association!
          </CardDescription>
        </div>
      </Card>
      <AssociationsProvider>
        <AssociationSearch initialSearch={initialSearch} />
        <AssociationList></AssociationList>
      </AssociationsProvider>
    </div>
  );
}
