import PopularDestinationCard from "./popular-destination/Card";
import { HashLink as Link } from "react-router-hash-link";
import { ArrowRight } from "lucide-react";
import { Destinations } from "@/data/fakedata";

//  kontainer dari popular destination
export default function PopularDestSection() {
  // nge filter jadi cuma ambil salah satu dari tiga tipe, hasilnya bakal
  // 1 beach, 1 nature, 1 other
  const destination = Destinations.reduce((acc, item) => {
    if (!acc.some((dest) => dest.type === item.type)) {
      acc.push(item);
    }
    return acc;
  }, []);

  console.log(destination)
  return (
    <div id="popularDestination" className="py-16">
      <div>
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-2xl font-semibold sm:text-5xl">
            Popular Destination
          </h3>
          <Link
            to="/destination#banner"
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
      </div>
      <div className="flex w-full flex-wrap gap-x-4 sm:mt-16 sm:flex-nowrap">
        {destination.map((item) => {
          return (
            <PopularDestinationCard
              title={item.title
                .split("_")
                .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
                .join(" ")}
              src={item.banner_url}
              to={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}
