import { Destinations } from "@/data/fakedata";
import { Dot, ArrowRight } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";


export default function GallerySection() {

  const randomGallery = Destinations.sort(() => 0.5 - Math.random()).slice(
    0,
    4,
  );

  return (
    <div id="gallery" className="w-full py-16">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-2xl font-semibold sm:text-5xl">Gallery</h3>
        <Link
          to="/gallery#banner"
          className="group inline-flex items-center text-blue-500 hover:text-blue-700 sm:text-2xl"
        >
          See More
          <span
            className="ml-2 transform transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <ArrowRight />
          </span>
        </Link>
      </div>
      <div className="flex flex-wrap justify-between">
        {randomGallery.map((item) => {
          return (
            <Link
              className="flex w-[500px] h-[450px] flex-col gap-y-2"
              to={`/gallery#banner`}
            >
              <div className="h-2/3 w-full">
                <img
                  src={item.banner_url}
                  alt=""
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex w-full justify-between py-2">
                <p>
                  {item.title
                    .split("_")
                    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
                    .join(" ")}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
