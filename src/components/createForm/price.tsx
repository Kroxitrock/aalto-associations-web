import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateFormProp } from "./createFormProp";

function Price({ form }: CreateFormProp) {
  return (
    <FormField
      control={form.control}
      name="price"
      render={({ field }) => (
        <FormItem className="w-1/2">
          <FormLabel>Price *</FormLabel>
          <FormControl>
            <Input className="" placeholder="Price" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Price;
