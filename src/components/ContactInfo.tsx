import { Category, CategoryItem, CategoryTitle } from "./ui/category";
import CircleChip from "@/components/ui/contactchip";
import { Mail, Phone, Send } from "lucide-react";

function ContactInfo() {
  return (
    <div className="flex flex-col">
      <Category>
        <CategoryTitle>Channels</CategoryTitle>
          <CircleChip
            icon={<Send className="text-black h-4 w-4" />}
            title="@aaltosalsaintelegram"
          />
          <CircleChip
            icon={<Phone className="text-black h-4 w-4" />}
            title="+358 1283 619 27"
          />
          <CircleChip
            icon={<Mail className="text-black h-4 w-4" />}
            title="salsa@aalto.fi"
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
