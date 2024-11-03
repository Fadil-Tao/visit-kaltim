import { useContext, useState } from "react";
import LocationMap from "./location-map";
import { Play, Pause } from "lucide-react";
import { VideoPausedByToggleContext } from "../../../context/video.context";

export default function VideoToggle() {
  const {isPausedByToggle , setIsPausedByToggle} = useContext(VideoPausedByToggleContext)

  const handlePlay = () => {
    setIsPausedByToggle(!isPausedByToggle);
  };
  return (
    <div className="flex justify-between items-center gap-3">
      <button onClick={handlePlay}>{isPausedByToggle ? <Play size={28} /> : <Pause size={30}/>}</button>
      <LocationMap />
    </div>
  );
}
