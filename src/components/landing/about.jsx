import { HeartHandshake , BookOpenText} from "lucide-react";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="px-24 flex flex-col relative justify-center items-center w-full text-center gap-y-16 py-32"
    >
        
      <h2 className=" text-5xl">About Kaltim</h2>
      <p className=" text-3xl">
        We are here to introduce you to the amazing destinations in Balikpapan,
        from stunning beaches, lush mangrove forests, to dynamic city life.
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center items-center gap-y-12">
          <p className="text-5xl">Vision</p>
          <HeartHandshake size={72}/>
          <p className=" text-2xl">
            To become a leading destination showcasing Balikpapan's natural
            beauty and culture while offering a sustainable, authentic
            experience for tourists.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-12">
          <p className="text-5xl">Mission</p>
          <BookOpenText size={72}/>
          <p className=" text-2xl">
          Providing sustainable quality tourism, focusing on preserving nature and local culture, and providing authentic and meaningful experiences for tourists.
          </p>
        </div>
      </div>
    </div>
  );
}
