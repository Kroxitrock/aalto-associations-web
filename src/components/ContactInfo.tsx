import { Category, CategoryItem, CategoryTitle } from "./ui/categoty";

function ContactInfo() {
  return (
    <div>
      <Category>
        <CategoryTitle>Channels</CategoryTitle>
        <CategoryItem>@aaltosalsaintelegram</CategoryItem>
        <CategoryItem>+358 1283 619 27</CategoryItem>
        <CategoryItem>salsa@aalto.fi</CategoryItem>
      </Category>
      <Category>
        <CategoryTitle>Address</CategoryTitle>
        <CategoryItem>Aalto JMT 1</CategoryItem>
      </Category>
    </div>
  );
}

export default ContactInfo;
