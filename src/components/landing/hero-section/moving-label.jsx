import { useContext, useEffect, useState, useRef } from "react";
import { VideoPausedByHoverContext, VideoPausedByToggleContext } from "../../../context/video.context";

export default function MovingLabel({
  startX,
  startY,
  endX,
  endY,
  label,
  text,
  duration, 
}) {
  const {isPausedByHover, setIsPausedByHover } = useContext(VideoPausedByHoverContext);
  const {isPausedByToggle} = useContext(VideoPausedByToggleContext)

  const [position, setPosition] = useState({ x: startX, y: startY });
  const [isDeleted, setIsDeleted] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [isOnHover, setIsOnHover] = useState(false)
  const remainingTime = useRef(duration); 
  const animationInterval = 100;

  useEffect(() => {
    setOpacity(1); 

    const deltaX = (endX - startX) / (duration / animationInterval);
    const deltaY = (endY - startY) / (duration / animationInterval);

    const moveInterval = setInterval(() => {
      if (!isPausedByHover && !isPausedByToggle) {
        setPosition((pos) => ({
          x: pos.x + deltaX,
          y: pos.y + deltaY,
        }));
        remainingTime.current -= animationInterval;
      }

      if (remainingTime.current <= 0) {
        clearInterval(moveInterval);
        setOpacity(0); 
        setTimeout(() => setIsDeleted(true), 100); 
      }
    }, animationInterval);

    return () => clearInterval(moveInterval);
  }, [isPausedByHover, isPausedByToggle,startX, startY, endX, endY, duration]);

  if (isDeleted) return null;

  return (
    <div
      className={`absolute transition-all duration-500 ease-in-out z-20`}
      style={{
        left: position.x,
        top: position.y,
        opacity,
        transition: "opacity 0.5s, left 0.5s, top 0.5s",
      }}
      onMouseEnter={() => {
        setIsPausedByHover(true)
        setIsOnHover(true)
      }}
      onMouseLeave={() => {
        setIsPausedByHover(false)
        setIsOnHover(false)
        
      }}
    >
      <p className="font-semibold cursor-pointer">{label}</p>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOnHover ? "max-h-40" : "max-h-0"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
