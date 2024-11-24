import { HeartHandshake, BookOpenText, Star, Car } from "lucide-react";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="relative flex w-full flex-col items-center justify-center gap-y-6 px-5 py-32 text-center sm:gap-y-16 sm:px-24 sm:text-2xl"
    >
      <h2 className="text-5xl">About</h2>
      <p>
        Mount Fuji, highest mountain in Japan. It rises to 12,388 feet (3,776
        metres) near the Pacific Ocean coast in Yamanashi and Shizuoka ken
        (prefectures) of central Honshu, about 60 miles (100 km) west of the
        Tokyo-Yokohama metropolitan area.
      </p>
      <div className="flex flex-wrap sm:w-full justify-center sm:justify-between gap-y-6 sm:flex-nowrap sm:p-5">
        <div className="flex flex-col items-center justify-center gap-y-3 sm:gap-y-12 sm:p-16 sm:px-32">
          <p className="text-5xl">Highlight</p>
          <Star size={72} />
          <p>Beutiful View</p>
        </div>
        <div className="flex flex-col items-center justify-center sm:gap-y-12 sm:p-16 sm:px-32">
          <p className="text-5xl">Proximity</p>
          <Car size={72} />
          <p>10 Km from Airport</p>
        </div>
      </div>
    </div>
  );
}
