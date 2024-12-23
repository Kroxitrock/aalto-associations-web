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
            <Input
              placeholder="Price"
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

export function base64ToFile(
  base64: string | null | undefined,
  filename: string
): File | undefined {
  if (!base64) {
    return undefined;
  }

  const [metadata, data] = base64.split(",");

  if (!data) {
    return undefined;
  }

  const mimeType =
    metadata.match(/data:(.*?);base64/)?.[1] || "application/octet-stream";

  const byteString = atob(data);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  return new File([arrayBuffer], filename, { type: mimeType });
}

export default Price;
