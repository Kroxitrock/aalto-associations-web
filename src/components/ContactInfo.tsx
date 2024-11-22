import { Category, CategoryTitle } from "./ui/category";
import CircleChip from "@/components/ui/contactchip";
import { Mail, Phone, Send } from "lucide-react";

function ContactInfo() {
  // Should be scrollable
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
    </div>
  );
}

export default ContactInfo;
