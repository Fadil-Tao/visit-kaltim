import mangrove from "../../assets/mangrove.webp";
import derawan from "../../assets/DERAWAN.webp";
import labuan from "../../assets/labuan.webp";
import { Link } from "react-router-dom";


export default function PopularDestSection() {
  const places = [
    { img: derawan, title: "Derawan" , to:"derawan" },
    { img: labuan, title: "Labuan Cermin", to : "labuan" },
    { img: mangrove, title: "Mangrove Forest", to:"mangrove-bpp" },
  ];

  return (
    <div id="popularDestination" className="py-16">
      <div>
        <div>
          <h3 className="font-semibold text-5xl mb-5">Popular Destination</h3>
          <p>Most Visited Place in Kaltim</p>
        </div>
      </div>
      <div className="flex gap-x-4 w-full mt-16">
        {places.map((item) => {
          return (
            <div className="w-1/3">
              <div className="w-full h-3/4 mb-7">
                <img src={item.img} alt={item.title} className="object-cover w-full h-full rounded-3xl" />
              </div>
              <Link className="font-semibold text-2xl" to={`/destinations/${item.to}`}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
