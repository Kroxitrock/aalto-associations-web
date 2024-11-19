import * as React from "react";

import { cn } from "@/lib/utils";

const Category = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      //"flex flex-col bg-shadowDark shadow md:flex-row md:max-w-4xl text-white m-2",
      className
    )}
    {...props}
  />
));
Category.displayName = "Category";

const CategoryTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-medium border-b border-white  mt-4 mb-2", className)}
    {...props}
  />
));
CategoryTitle.displayName = "CategoryTitle";

const CategoryItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm p-1", className)} {...props} />
));
CategoryItem.displayName = "CategoryItem";

export { Category, CategoryTitle, CategoryItem };
