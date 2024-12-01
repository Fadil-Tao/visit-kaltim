import { useContext, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { VolumeX } from "lucide-react";
import { Volume2 } from "lucide-react";
import {
  VideoMutedbyToggleContext,
  VideoPausedByToggleContext,
} from "../../../context/video.context";

export default function VideoToggle() {
  const { isPausedByToggle, setIsPausedByToggle } = useContext(
    VideoPausedByToggleContext,
  );
  const { isMuted, setIsMuted } = useContext(VideoMutedbyToggleContext);

  const handlePlay = () => {
    setIsPausedByToggle(!isPausedByToggle);
  };
  const handleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <div className="flex items-center justify-between gap-3">
      <button onClick={handlePlay}>
        {isPausedByToggle ? <Play size={28} /> : <Pause size={30} />}
      </button>
      <button onClick={handleMute}>
        {isMuted ? <VolumeX size={28} /> : <Volume2 size={30} />}
      </button>
    </div>
  );
}
