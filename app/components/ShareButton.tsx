import { SVGProps } from "react";
import { MouseEventHandler } from "react";
import { cn } from "@/app/lib/cn"

export function ShareButton({
  active = false,
  onClick,
  className,
}: {
  active: boolean;
  onClick: MouseEventHandler;
  className?: string
}) {
  return (
    <button
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full",
        active ? "bg-primary-2 fill-white" : "bg-primary-4 fill-[#6E8098]",
        className
      )}
      onClick={onClick}
    >
      <IconShareSVG />
    </button>
  );
}

function IconShareSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={13}
      {...props}
    >
      <path d="M15 6.495 8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
    </svg>
  );
}
