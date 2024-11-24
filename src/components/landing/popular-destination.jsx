import mangrove from "../../assets/mangrove.webp";
import derawan from "../../assets/DERAWAN.webp";
import labuan from "../../assets/labuan.webp";
import PopularDestinationCard from "./popular-destination/Card";
import { HashLink as Link } from "react-router-hash-link";
import { ArrowRight } from "lucide-react";

export default function PopularDestSection() {
  const places = [
    { img: derawan, title: "Derawan", to: "derawan" },
    { img: labuan, title: "Labuan Cermin", to: "labuan" },
    { img: mangrove, title: "Mangrove Forest", to: "mangrove-bpp" },
  ];
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
        {places.map((item) => {
          return (
            <PopularDestinationCard
              title={item.title}
              src={item.img}
              to={item.to}
            />
          );
        })}
      </div>
    </div>
  );
}
