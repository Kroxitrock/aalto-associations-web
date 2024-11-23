import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateFormProp } from "./createFormProp";

function MembershipFee({ form }: CreateFormProp) {
  return (
    <FormField
      control={form.control}
      name="membershipFee"
      render={({ field }) => (
        <FormItem className="w-1/2">
          <FormLabel>Membership Fee</FormLabel>
          <FormControl>
            <Input
              placeholder="Membership Fee"
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

export default MembershipFee;
