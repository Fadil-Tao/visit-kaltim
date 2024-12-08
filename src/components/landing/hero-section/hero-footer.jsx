import VideoNavigation from "./video-navigation";
import VideoToggle from "./video-toggle";
//  bagian bawah hero section
export default function HeroFooter() {
  return (
    <div className="w-full x flex justify-between sm:px-24 text-2xl">
      <VideoNavigation />
      <VideoToggle />
    </div>
  );
}
