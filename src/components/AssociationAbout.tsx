import ContactInfo from "./ContactInfo";
import {
  LeftView,
  RightView,
  SplitView,
  ViewContent,
  ViewTitle,
} from "@/components/ui/splitView";
import { useParams } from "react-router-dom";
import { useAssociationDetails } from "@/contexts/AssociationDetailsContext";
import AssociationDetailsProvider from "@/provider/AssociationDetailsProvider";

function AssociationAbout() {
  const { id } = useParams();
  if (!id) {
    throw new Error("No association ID provided in the URL");
  }
  const associationId = parseInt(id, 10);
  return (
    <AssociationDetailsProvider associationId={associationId}>
      <AssociationDetailsContent />
    </AssociationDetailsProvider>
  );
}

function AssociationDetailsContent() {
  const context = useAssociationDetails();

  if (!context) {
    return <div>Loading...</div>;
  }

  const { data, isPending, error } = context;

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading association details</div>;
  }

  return (
    <SplitView>
      <LeftView>
        <ViewTitle>Description</ViewTitle>
        <ViewContent>{data?.description}</ViewContent>
      </LeftView>
      <RightView>
        <ViewTitle>Contacts</ViewTitle>
        <ContactInfo />
      </RightView>
    </SplitView>
  );
}

export default AssociationAbout;
