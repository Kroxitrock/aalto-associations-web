import AssociationList from "@/components/AssociationList";
import { AssociationsProvider } from "@/provider/AssociationsProvider";

export default function Associations() {
  return (
    <AssociationsProvider>
      <AssociationList></AssociationList>
    </AssociationsProvider>
  );
}
