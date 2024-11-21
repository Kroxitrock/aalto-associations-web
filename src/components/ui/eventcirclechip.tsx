import { CardContent, CardTitle } from "@/components/ui/card";

interface Props {
    title?: React.ReactNode;
    icon: React.ReactNode;
  }

export default function CircleChip (
    {title, icon}:Props)
    {
    return (
        <CardContent className="flex flex-col items-center w-52">
            <div className="h-16 w-16 bg-customYellow rounded-full text-black p-2">
                {icon}
            </div>

            <CardTitle className="text-center mt-4">
                {title}
            </CardTitle>
          </CardContent>
          )
}