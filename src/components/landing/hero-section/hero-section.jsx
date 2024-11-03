import { useEffect, useState } from "react";

import useScaleTransformPercentage from "../../../hooks/viewEffect.hook";
import HeroFooter from "./hero-footer";
import {
  VideoPausedByHoverContext,
  VideoPausedByToggleContext,
  videoNavigationContext,
} from "../../../context/video.context";
import MovingLabel from "./moving-label";
import dummyVid1 from "../../../assets/dummyVid.mp4";
import dummyVid2 from "../../../assets/dummyVid2.mp4";
import dummyVid3 from "../../../assets/dummyVid3.mp4";
import ReactPlayer from "react-player";
import { useRef } from "react";

export default function HeroSection() {
  const { scale, xyPercent } = useScaleTransformPercentage();
  const { xPercent, yPercent } = xyPercent;
  const [isPausedByHover, setIsPausedByHover] = useState(true);
  const [isPausedByToggle, setIsPausedByToggle] = useState(true);
  const [index, setIndex] = useState(0);
  const [currentPlace, setCurrentPlace] = useState("");
  const videoPlayerRef = useRef(null);
  const [timePassed, setTimePassed] = useState(0);
  const [start, setStart] = useState(true);


  const handleProgress = ({ playedSeconds }) => {
    setTimePassed(playedSeconds);
  };

  const videoMapping = [
    {
      url: dummyVid1,
      place: "Mangrove",
      labels: [
        {
          labelAppearAt: 1,
          label: "Kepulauan Yang Indah",
          text: "Dont beleive me just watch",
          xStart: 300,
          yStart: 300,
          endX: 500,
          endY: 500,
          duration: 9000,
        },
        {
          labelAppearAt: 4,
          label: "Lautnya bersih",
          text: "Arunara",
          xStart: 400,
          yStart: 600,
          endX: 500,
          endY: 500,
          duration: 9000,
        },
      ],
    },
    {
      url: dummyVid2,
      place: "Labuan",
      labels: [
        {
          labelAppearAt: 2,
          label: "Kepulauan Yang Indah",
          text: "Dont beleive me just watch",
          xStart: 600,
          yStart: 600,
          endY: 800,
          endX: 800,
          duration: 10000,
        },
      ],
    },
    {
      url: dummyVid3,
      place: "Derawan",
      labels: [
        {
          labelAppearAt: 2,
          label: "Kepulauan Yang Indah",
          text: "Dont beleive me just watch",
          xStart: 700,
          yStart: 700,
          endY: 200,
          endX: 300,
          duration: 5000,
        },
      ],
    },
  ];

  useEffect(() => {
    setCurrentPlace(videoMapping[index].place);
  }, [index]);

  return (
    <videoNavigationContext.Provider value={{ index, setIndex, currentPlace }}>
      <VideoPausedByHoverContext.Provider
        value={{ isPausedByHover, setIsPausedByHover }}
      >
        <VideoPausedByToggleContext.Provider
          value={{ isPausedByToggle, setIsPausedByToggle }}
        >
          <div className={`w-full h-screen overflow-hidden`}>
            <div className={`h-full w-full relative`}>
              {start&& (
                <div className="absolute w-full h-full flex flex-col justify-center items-center gap-y-4 z-20">
                  <h1 className="font-bold text-5xl">Welcome To Kaltim</h1>
                  <p className="text-2xl">Discover New Places and Create Unforgettable Memories</p>
                  <button onClick={()=> {
                    setStart(false)
                    setIsPausedByHover(false)
                    setIsPausedByToggle(false)
                  }} className="py-2 px-7 text-xl rounded-full border-white border">
                    Start
                  </button>
                </div>
              )}
              <div
                className={`${isPausedByHover && "brightness-50"} `}
                style={{
                  transform: `scale(${scale}) translate(${xPercent}%, ${yPercent}%)`,
                  transition: `transform 0.1s ease`,
                }}
              >
                <ReactPlayer
                  ref={videoPlayerRef}
                  url={videoMapping[index].url}
                  muted={true}
                  playing={!isPausedByHover && !isPausedByToggle}
                  width={"100%"}
                  height={"100%"}
                  onProgress={handleProgress}
                />
              </div>
              {videoMapping[index].labels.map((item, idx) => {
                if (item.labelAppearAt <= timePassed) {
                  return (
                    <MovingLabel
                      videoKey={idx}
                      startX={item.xStart}
                      startY={item.yStart}
                      endX={item.endX}
                      endY={item.endY}
                      label={item.label}
                      text={item.text}
                      duration={item.duration}
                    />
                  );
                }
              })}
            </div>
            <div className={`${isPausedByHover && "hidden"}`}>
              <HeroFooter />
            </div>
          </div>
        </VideoPausedByToggleContext.Provider>
      </VideoPausedByHoverContext.Provider>
    </videoNavigationContext.Provider>
  );
}




