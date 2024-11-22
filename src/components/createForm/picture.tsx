import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Prop } from "./createEventProp";

function Picture({ form }: Prop) {
  return (
    <FormField
      control={form.control}
      name="picture"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>Upload your image</FormLabel>
          <FormControl>
            <div className="flex flex-col items-center justify-center gap-y-4 border border-foreground p-4">
              {field.value && field.value instanceof File && (
                <img
                  src={URL.createObjectURL(field.value)}
                  alt="Uploaded"
                  className="max-h-80"
                />
              )}

              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  file && field.onChange(file);
                }}
                className="file:text-white file:border file:border-input file:p-1 file:pr-4 file:pl-4 file:mr-4 bg-black text-white bg-transparent border-none file:cursor-pointer"
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Picture;
