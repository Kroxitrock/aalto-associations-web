import ContactInfo from "./ContactInfo";
import {
  LeftView,
  RightView,
  SplitView,
  ViewContent,
  ViewTitle,
} from "@/components/ui/splitView";
import { useParams } from "react-router-dom";
import {
  AssociationProvider,
} from "@/provider/AssociationProvider";
import {useAssociation} from "@/contexts/AssociationContext";
import AssociationHeader from "./AssociationHeader";

function AssociationAbout() {
  const { id } = useParams();
  if (!id) {
    throw new Error("No association ID provided in the URL");
  }
  const associationId = parseInt(id, 10);
  return (
    <AssociationProvider associationId={associationId}>
      <AssociationDetailsContent />
    </AssociationProvider>
  );
}

function AssociationDetailsContent() {
  const context = useAssociation();

  if (!context) {
    return <div>Loading...</div>;
  }

  const { data, isLoading, error } = context;

  if (isLoading) {
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
