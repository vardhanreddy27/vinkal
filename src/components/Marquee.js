import { cn } from "../utils/cn";

export default function Marquee({
  className,
  reverse,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around", {
              "animate-marquee": !vertical,
              "animate-marquee-vertical": vertical,
              "reverse-animation": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
