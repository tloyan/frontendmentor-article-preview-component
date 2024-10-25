import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function cn(...args: Array<ClassValue>) {
    return twMerge(clsx(...args))
}