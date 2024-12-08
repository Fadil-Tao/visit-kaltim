import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
//  menggabungkan classs tailwind ini buatan dari shadcn
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
