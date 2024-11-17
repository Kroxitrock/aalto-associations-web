import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(" font-medium", {
  variants: {
    variant: {
      action: "bg-customYellow text-black hover:bg-customYellow-dark",
      info: "bg-black text-white hover:bg-shadowDark border border-white",
      icon: "flex gap-2 items-center bg-shadowDark text-white hover:bg-black border border-white ",
    },
    size: {
      default: "h-10 px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "info",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
