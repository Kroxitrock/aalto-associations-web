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

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export default MembershipFee;
