import { HeartHandshake, BookOpenText } from "lucide-react";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="sm:px-24 flex flex-col relative justify-center items-center w-full text-center sm:gap-y-16 gap-y-6 py-32 sm:text-2xl px-5"
    >
      <h2 className="text-5xl">About Kaltim</h2>
      <p>
        Discover the wonders of East Kalimantan, a land of diverse cultures,
        rich heritage, and breathtaking landscapes. From lush rainforests to
        vibrant cities, Kaltim offers an unparalleled experience for every
        traveler.
      </p>
      <div className="flex justify-between flex-wrap sm:flex-nowrap gap-y-6 sm:p-5">
        <div className="flex flex-col justify-center items-center sm:gap-y-12 gap-y-3">
          <p className="text-5xl">Vision</p>
          <HeartHandshake size={72} />
          <p>
            To transform East Kalimantan into a top sustainable tourism
            destination, blending eco-friendly practices with rich cultural
            experiences to create a harmonious balance between people, nature,
            and progress.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center sm:gap-y-12 sm:p-5">
          <p className="text-5xl">Mission</p>
          <BookOpenText size={72} />
          <p >
            We aim to preserve Kaltim's natural beauty while promoting the
            cultural heritage of its indigenous communities. By building
            eco-tourism infrastructure and supporting local businesses, we
            invite tourists to explore Kaltim responsibly and sustainably.
          </p>
        </div>
      </div>
    </div>
  );
}
