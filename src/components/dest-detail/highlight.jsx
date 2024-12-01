import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Highlight({ array }) {
  return (
    <div className="w-full">
      <p className="my-12 text-5xl font-semibold">Highlight</p>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {array.map((item, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/2 lg:basis-1/3 "
            >
              <div className=" w-full h-full ">
                    <img src={item} alt="" className=" object-cover w-full h-full rounded-xl" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
