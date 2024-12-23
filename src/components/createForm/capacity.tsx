import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateFormProp } from "./createFormProp";

function Capacity({ form }: CreateFormProp) {
  return (
    <FormField
      control={form.control}
      name="capacity"
      render={({ field }) => (
        <FormItem className="w-1/2">
          <FormLabel>Capacity</FormLabel>
          <FormControl>
            <Input
              className=""
              placeholder="Paricipents capacity"
              {...field}
              onChange={(e) => {
                const value = e.target.value ? parseFloat(e.target.value) : 0;
                field.onChange(value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
export default Capacity;
