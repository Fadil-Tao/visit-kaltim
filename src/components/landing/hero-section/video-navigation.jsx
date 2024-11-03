import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { videoNavigationContext } from "../../../context/video.context";

export default function VideoNavigation() {
  const { index, setIndex, currentPlace } = useContext(videoNavigationContext);

  return (
    <div className="flex justify-between items-center gap-x-5 text-3xl font-semibold">
      <button
        onClick={() => {
          setIndex(index - 1);
        }}
        disabled={index === 0}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={52} />
      </button>
      <p>{currentPlace}</p>
      <button
        onClick={() => setIndex(index + 1)}
        disabled={index === 2}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={52} />
      </button>
    </div>
  );
}
