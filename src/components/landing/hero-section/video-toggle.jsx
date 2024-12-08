import { useContext, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { VolumeX } from "lucide-react";
import { Volume2 } from "lucide-react";
import {
  VideoMutedbyToggleContext,
  VideoPausedByToggleContext,
} from "../../../context/video.context";
// buat pause dan mute video
export default function VideoToggle() {
  const { isPausedByToggle, setIsPausedByToggle } = useContext(
    VideoPausedByToggleContext,
  );
  const { isMuted, setIsMuted } = useContext(VideoMutedbyToggleContext);
// fungsi pause dan play
  const handlePlay = () => {
    setIsPausedByToggle(!isPausedByToggle);
  };
  // fungsi mute dan unmute
  const handleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <div className="flex items-center justify-between gap-3">
      {/* fungsi dipake di tombol ini */}
      <button onClick={handlePlay}>
        {isPausedByToggle ? <Play size={28} /> : <Pause size={30} />}
      </button>
      {/* fungsi dipake di tombol ini */}
      <button onClick={handleMute}>
        {isMuted ? <VolumeX size={28} /> : <Volume2 size={30} />}
      </button>
    </div>
  );
}
