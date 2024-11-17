import { Check, Pencil } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardImage,
  CardDescription,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function ComponentsExample() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* DIFFERENT CARD */}
      <Button variant="action"> Join </Button>
      <Button> Learn more </Button>
      <Button variant="icon">
        <Pencil className="h-4 w-4" /> Edit
      </Button>
      <Button variant="icon">
        <Check className="h-4 w-4" /> Joined
      </Button>

      {/* ASSOCIATION CARD */}
      <Card>
        <CardImage
          src="https://www.ayy.fi/sites/g/files/flghsv231/files/styles/o_567w_ah_n/public/2024-09/Aalto_Salsa_Society.png?itok=moApesrS"
          alt="Noteworthy technology acquisitions 2021"
        />
        <div className="flex flex-col p-4 leading-normal">
          <div className="flex flex-row justify-between leading-normal">
            <CardTitle>Noteworthy technology acquisitions 2021</CardTitle>
            <Button className="bg-shadowDark">View</Button>
          </div>
          <CardDescription className="mt-4">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </CardDescription>
        </div>
      </Card>

      <Input />

      {/* ASSOCIATION CAROUSEL */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-[200px] md:max-w-xl lg:max-w-5xl bg-shadowDark"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
              <div className="p-3">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-1 flex-col">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                    <Button className="mt-4">View Details</Button>{" "}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
