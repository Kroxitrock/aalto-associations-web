import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CreateFormProp } from "./createFormProp";
function Description({ form }: CreateFormProp) {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <textarea
              className="w-full p-2 rounded-md border border-input bg-background resize-y overflow-auto h-24"
              placeholder="Description"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Description;
