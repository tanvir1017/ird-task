import { cn } from "@/lib/utils";
import { Slider } from "@/shadcn/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function OwnSLider({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-full", className)}
      {...props}
    />
  );
}
