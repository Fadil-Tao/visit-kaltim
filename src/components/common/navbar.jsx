import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TextSearch } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="absolute top-0 z-30 flex w-full items-center justify-between gap-x-12 bg-transparent text-2xl font-semibold transition-colors duration-300 sm:px-24 sm:py-8 hover:bg-black ">
      <div>
        <Link to={"/"} className="px-5 sm:px-0">
          Visit Kaltim
        </Link>
      </div>
      <div className="flex gap-x-20">
        <Sheet>
          <SheetTrigger className="flex place-items-center gap-x-2 rounded-bl-2xl bg-black px-4 py-2 text-xs sm:hidden">
            Open
            <TextSearch width={30} height={30} />
          </SheetTrigger>
          <SheetContent className="bg-red-200">
            <SheetHeader className="flex items-start justify-start">
              <SheetTitle>Main Menu</SheetTitle>
            </SheetHeader>
            <div className="grid place-items-start py-6 text-3xl">
              <Link to={"/#about"} className="py-3" smooth>
                About
              </Link>
              <Link to={"/#popularDestination"} className="py-3" smooth>
                Destination
              </Link>
              <Link to={"/#testimonial"} className="py-3" smooth>
                Our Visitor
              </Link>
              <Link to={"/#gallery"} className="py-3" smooth>
                Gallery
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <div className={`hidden sm:flex gap-12 text-shadow-lg`}>
          <Link to={"/#about"} smooth>About</Link>
          <Link to={"/#popularDestination"} smooth>Destination</Link>
          <Link to={"/#testimonial"} smooth>Our Visitor</Link>
          <Link to={"/#gallery"} smooth>Gallery</Link>
        </div>
      </div>
    </nav>
  );
}
