import { Dot, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function GallerySection() {
  const gallery = [
    {
      title: "Balikpapan Botanical Garden Tour",
      place: "Balikpapan, East Kalimantan",
      img: "https://bumijourney.com/wp-content/uploads/2022/08/Balikpapan-Botanical-Garden-Tour.png",
      date: "Apr 04, 2024",
      summary:
        "Kenapa why selalu always? Karena because tidak pernah never.Sebenarnya actually menginginkan want, namun but akan will jika if sering often.Sayangnya sadly hampir almost dan and jarang seldom.",
      readEst: "6 min read",
      to: "",
    },
    {
      title: "Balikpapan Botanical Garden Tour",
      place: "Balikpapan, East Kalimantan",
      img: "https://bumijourney.com/wp-content/uploads/2022/08/Balikpapan-Botanical-Garden-Tour.png",
      date: "Apr 04, 2024",
      summary:
        "Kenapa why selalu always? Karena because tidak pernah never.Sebenarnya actually menginginkan want, namun but akan will jika if sering often.Sayangnya sadly hampir almost dan and jarang seldom.",
      readEst: "6 min read",
      to: "",
    },
    {
      title: "Balikpapan Botanical Garden Tour",
      place: "Balikpapan, East Kalimantan",
      img: "https://bumijourney.com/wp-content/uploads/2022/08/Balikpapan-Botanical-Garden-Tour.png",
      date: "Apr 04, 2024",
      summary:
        "Kenapa why selalu always? Karena because tidak pernah never.Sebenarnya actually menginginkan want, namun but akan will jika if sering often.Sayangnya sadly hampir almost dan and jarang seldom.",
      readEst: "6 min read",
      to: "",
    },
    {
      title: "Balikpapan Botanical Garden Tour",
      place: "Balikpapan, East Kalimantan",
      img: "https://bumijourney.com/wp-content/uploads/2022/08/Balikpapan-Botanical-Garden-Tour.png",
      date: "Apr 04, 2024",
      summary:
        "Kenapa why selalu always? Karena because tidak pernah never.Sebenarnya actually menginginkan want, namun but akan will jika if sering often.Sayangnya sadly hampir almost dan and jarang seldom.",
      readEst: "6 min read",
      to: "",
    },
  ];

  return (
    <div id="gallery" className="w-full py-16">
      <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl sm:text-5xl font-semibold">Gallery</h3>
        <Link
          to="/gallery"
          className="group inline-flex items-center sm:text-2xl text-blue-500 hover:text-blue-700"
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
        {gallery.map((item) => {
          return (
            <div className="flex w-[580px] flex-col gap-y-2">
              <div className="h-2/3 w-full">
                <img
                  src={item.img}
                  alt=""
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex w-full justify-between py-2">
                <p>{item.place}</p>
                <div className="flex">
                  <p>{item.date}</p>
                  <Dot />
                  <p>{item.readEst}</p>
                </div>
              </div>
              <p className="text-4xl font-semibold">{item.title}</p>
              <p className="">{item.summary}</p>
              <Link>See Full Post</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
