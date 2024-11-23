import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateFormProp } from "./createFormProp";

function Title({ form }: CreateFormProp) {
  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem className="w-1/2">
          <FormLabel>Title *</FormLabel>
          <FormControl>
            <Input placeholder="Enter event title" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Title;
