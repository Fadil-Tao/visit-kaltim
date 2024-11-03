import { Dot } from "lucide-react";
import { Link } from "react-router-dom";

export default function GallerySection() {
  const gallery = [
    {
      title: "Balikpapan Botanical Garden Tour",
      place: "Balikpapan, East Kalimantan",
      img: "https://bumijourney.com/wp-content/uploads/2022/08/Balikpapan-Botanical-Garden-Tour.png",
      date: "Apr 04, 2024",
      summary: "Kenapa why selalu always? Karena because tidak pernah never.Sebenarnya actually menginginkan want, namun but akan will jika if sering often.Sayangnya sadly hampir almost dan and jarang seldom.",
      readEst: "6 min read",
      to: "",
    },
    {
      title: "Balikpapan Botanical Garden Tour",
      place: "Balikpapan, East Kalimantan",
      img: "https://bumijourney.com/wp-content/uploads/2022/08/Balikpapan-Botanical-Garden-Tour.png",
      date: "Apr 04, 2024",
      summary: "Kenapa why selalu always? Karena because tidak pernah never.Sebenarnya actually menginginkan want, namun but akan will jika if sering often.Sayangnya sadly hampir almost dan and jarang seldom.",
      readEst: "6 min read",
      to: "",
    },
    {
      title: "Balikpapan Botanical Garden Tour",
      place: "Balikpapan, East Kalimantan",
      img: "https://bumijourney.com/wp-content/uploads/2022/08/Balikpapan-Botanical-Garden-Tour.png",
      date: "Apr 04, 2024",
      summary: "Kenapa why selalu always? Karena because tidak pernah never.Sebenarnya actually menginginkan want, namun but akan will jika if sering often.Sayangnya sadly hampir almost dan and jarang seldom.",
      readEst: "6 min read",
      to: "",
    },
    {
      title: "Balikpapan Botanical Garden Tour",
      place: "Balikpapan, East Kalimantan",
      img: "https://bumijourney.com/wp-content/uploads/2022/08/Balikpapan-Botanical-Garden-Tour.png",
      date: "Apr 04, 2024",
      summary: "Kenapa why selalu always? Karena because tidak pernah never.Sebenarnya actually menginginkan want, namun but akan will jika if sering often.Sayangnya sadly hampir almost dan and jarang seldom.",
      readEst: "6 min read",
      to: "",
    },
  ];

  return (
    <div id="gallery" className="w-full py-16">
      <div>
        <div>
          <h3 className="font-semibold text-5xl mb-5">Gallery</h3>
          <p>Explore our latest stories from our active users</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {gallery.map((item) => {
          return (
            <div className="flex flex-col gap-y-2 w-[580px]">
              <div className=" w-full h-2/3">
                <img src={item.img} alt=""  className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex w-full justify-between py-2">
                <p>{item.place}</p>
                <div className="flex">
                  <p>{item.date}</p>
                  <Dot />
                  <p>{item.readEst}</p>
                </div>
              </div>
              <p className=" text-4xl font-semibold">{item.title}</p>
              <p className="">{item.summary}</p>
              <Link>See Full Post</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
