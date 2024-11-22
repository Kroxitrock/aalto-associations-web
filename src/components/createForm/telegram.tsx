import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateFormProp } from "./createFormProp";

function Telegram({ form }: CreateFormProp) {
  return (
    <FormField
      control={form.control}
      name="telegram"
      render={({ field }) => (
        <FormItem className="w-1/2">
          <FormLabel>Telegram</FormLabel>
          <FormControl>
            <Input placeholder="Telegram" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Telegram;
