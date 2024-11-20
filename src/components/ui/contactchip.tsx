import { CardContent, CardTitle } from "@/components/ui/card";

interface Props {
  icon: React.ReactNode;
  title?: React.ReactNode;
}

export default function ContactChip({ title, icon }: Props) {
  return (
    <CardContent className="p-1 flex items-center gap-2 w-full">
      <div className="flex justify-center items-center h-8 w-8 bg-customYellow rounded-full text-black">
        {icon}
      </div>

      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardContent>
  );
}
