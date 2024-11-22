import * as React from "react";

import { cn } from "@/lib/utils";

const SplitView = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col sm:flex-row w-full", className)}
    {...props}
  />
));
SplitView.displayName = "SplitView";

const LeftView = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("sm:flex-[3] p-4", className)} {...props} />
));
LeftView.displayName = "LeftView";

const RightView = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("sm:flex-[2] flex-1 bg-shadowDark m-4 p-4", className)}
    {...props}
  />
));
RightView.displayName = "RightView";

const ViewTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-2xl mb-4", className)} {...props} />
));
ViewTitle.displayName = "ViewTitle";

const ViewContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("whitespace-pre-line text-sm", className)}
    {...props}
  />
));
ViewContent.displayName = "ViewContent";

export { SplitView, LeftView, RightView, ViewTitle, ViewContent };
