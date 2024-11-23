import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { CreateFormProp } from "@/components/createForm/createFormProp";
import { Button } from "@/components/ui/button";

// TODO: font is different
// TODO: Find how to change the color of the DayPicker or leave it like that
function DatePicker({ form }: CreateFormProp) {
  return (
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem className="w-1/2 flex flex-col mt-3">
          <FormLabel>Pick a date *</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "text-left font-normal rounded-lg flex justify-between items-center w-full",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <span className="flex-1">
                    {field.value ? (
                      `${format(field.value, "PPP")} at ${String(
                        field.value.getHours()
                      ).padStart(2, "0")}:${String(
                        field.value.getMinutes()
                      ).padStart(2, "0")}`
                    ) : (
                      <span>Pick a date and time</span>
                    )}
                  </span>
                  <CalendarIcon className="ml-2" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="sm:flex bg-black text-white">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
                <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                  <ScrollArea className="w-64 sm:w-auto">
                    <div className="flex sm:flex-col p-2">
                      {Array.from({ length: 24 }, (_, hour) => (
                        <Button
                          key={hour}
                          variant={
                            field.value &&
                            field.value.getHours() % 12 === hour % 12
                              ? "info"
                              : "action"
                          }
                          className="sm:w-full shrink-0 aspect-square"
                          onClick={() => {
                            field.value?.setHours(hour);
                            field.onChange(field.value);
                          }}
                        >
                          {hour}
                        </Button>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" className="sm:hidden" />
                  </ScrollArea>
                  <ScrollArea className="w-64 sm:w-auto">
                    <div className="flex sm:flex-col p-2">
                      {Array.from({ length: 12 }, (_, i) => i * 5).map(
                        (minute) => (
                          <Button
                            key={minute}
                            variant={
                              field.value &&
                              field.value?.getMinutes() === minute
                                ? "info"
                                : "action"
                            }
                            className="sm:w-full shrink-0 aspect-square"
                            onClick={() => {
                              field.value?.setMinutes(minute);
                              field.onChange(field.value);
                            }}
                          >
                            {minute}
                          </Button>
                        )
                      )}
                    </div>
                    <ScrollBar orientation="horizontal" className="sm:hidden" />
                  </ScrollArea>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default DatePicker;
