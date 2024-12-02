import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function PopupCarousel({array, index}) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
    
    api.scrollTo(index)
  }, [api]);

  return (
    <Carousel className="h-full w-full overflow-hidden" setApi={setApi}>
      <div className="h-4/5">
        <div className="h-full grid place-items-center">
          <CarouselContent className="">
            {array.map((item, index) => {
              return (
                <CarouselItem key={index} className="">
                  <div className="h-[450px] w-auto max-w-full">
                    <img
                      src={item.img_url}
                      alt={item.title}
                      className="h-full max-h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-center font-semibold text-border">
                    {item.title}
                  </p>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="absolute sm:flex hidden left-2 top-2/5  items-center justify-center">
            <CarouselPrevious className="relative left-0 translate-x-0 bg-foreground hover:translate-x-0" />
          </div>
          <div className="absolute sm:flex hidden right-2 top-2/5  items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 bg-foreground hover:translate-x-0" />
          </div>
        </div>
      </div>

      <div className="1/5 w-full">
        <div className="flex w-full items-end justify-end">
          <p className="">
            {current}/{array.length}
          </p>
        </div>
        <div className="flex h-1/5 w-full items-center overflow-hidden sm:justify-center border-t-2 border-border py-8">
          <div className="flex sm:justify-center w-full overflow-hidden gap-2">
            {array.map((item, index) => (
              <div
                key={index}
                className={`h-20 w-20 rounded-xl ${
                  index + 1 === current ? "border-2 border-white" : ""
                }`}
                onClick={() => api && api.scrollTo(index)}
              >
                <img
                  src={item.img_url}
                  className="h-full w-full rounded-xl object-cover"
                  alt={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Carousel>
  );
}
