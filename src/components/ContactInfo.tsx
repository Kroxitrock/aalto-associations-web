import { Category, CategoryItem, CategoryTitle } from "./ui/category";
import CircleChip from "@/components/ui/contactchip";
import { useAssociationDetails } from "@/contexts/AssociationDetailsContext";
import { Mail, Phone, Send } from "lucide-react";

function ContactInfo() {
  const context = useAssociationDetails();

  if (!context) {
    return <div>Loading...</div>;
  }

  const { data, isPending, error } = context;

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading contact details.</div>;
  }
  
  return (
    <div className="flex flex-col">
      <Category>
        <CategoryTitle>Channels</CategoryTitle>
          <CircleChip
            icon={<Send className="text-black h-4 w-4" />}
            title={data?.telegram}
          />
          <CircleChip
            icon={<Phone className="text-black h-4 w-4" />}
            title={data?.phone}
          />
          <CircleChip
            icon={<Mail className="text-black h-4 w-4" />}
            title={data?.email}
          />
      </Category>
      <Category>
        <CategoryTitle>Address</CategoryTitle>
        <CategoryItem>JMT 1</CategoryItem>
      </Category>
    </div>
  );
}

export default ContactInfo;
