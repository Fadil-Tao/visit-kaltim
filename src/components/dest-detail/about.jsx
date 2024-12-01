import { HeartHandshake, BookOpenText, Star, Car } from "lucide-react";

export default function AboutSection({text,proximity,highlight}) {
  return (
    <div
      id="about"
      className="relative flex w-full flex-col items-center justify-center gap-y-6 px-5 py-32 text-center sm:gap-y-16 sm:px-24 sm:text-2xl"
    >
      <h2 className="text-5xl">About</h2>
      <p>
      {text} 
      </p>
      <div className="flex flex-wrap sm:w-full justify-center sm:justify-between gap-y-6 sm:flex-nowrap sm:p-5">
        <div className="flex flex-col items-center justify-center gap-y-3 sm:gap-y-12 sm:p-16 sm:px-32">
          <p className="text-5xl">Highlight</p>
          <Star size={72} />
          <p>{highlight}</p>
        </div>
        <div className="flex flex-col items-center justify-center sm:gap-y-12 sm:p-16 sm:px-32">
          <p className="text-5xl">Proximity</p>
          <Car size={72} />
          <p>{proximity}</p>
        </div>
      </div>
    </div>
  );
}
