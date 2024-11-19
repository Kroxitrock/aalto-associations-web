import { CardImage } from "./ui/card";
import { Category, CategoryItem, CategoryTitle } from "./ui/categoty";

function MemberList() {
  return (
    <div className="overflow-y-auto max-h-96">
      <Category>
        <CategoryTitle>Accepted</CategoryTitle>
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryItem
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "bg-shadowDark" : "bg-shadowDark-light"
            }`}
          >
            <CardImage
              className="w-8 md:w-8 m-2 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZnSqlKhf4aBLhzro-PjB7wX4Eqy2E3jCE8A&s"
              alt="Aalto Salsa logo"
            />
            @aaltosalsaintelegram
          </CategoryItem>
        ))}
      </Category>
      <Category>
        <CategoryTitle>Waiting</CategoryTitle>
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryItem key={index} className="flex items-center">
            <CardImage
              className="w-8 md:w-8 m-2 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZnSqlKhf4aBLhzro-PjB7wX4Eqy2E3jCE8A&s"
              alt="Aalto Salsa logo"
            />
            @aaltosalsaintelegram
          </CategoryItem>
        ))}
      </Category>
    </div>
  );
}

export default MemberList;
