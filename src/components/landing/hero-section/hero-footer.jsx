import VideoNavigation from "./video-navigation";
import VideoToggle from "./video-toggle";

export default function HeroFooter() {
  return (
    <div className="w-full absolute flex justify-between sm:px-24 bottom-5 text-2xl">
      <VideoNavigation />
      <VideoToggle />
    </div>
  );
}
