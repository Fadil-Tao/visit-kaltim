import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import useScaleTransformPercentage from "../../../hooks/viewEffect.hook";
import HeroFooter from "./hero-footer";
import {
  VideoPausedByHoverContext,
  VideoPausedByToggleContext,
  videoNavigationContext,
} from "../../../context/video.context";
import MovingLabel from "./moving-label";
import { ParallaxBanner } from "react-scroll-parallax";
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
  const [isLoading, setIsLoading] = useState(true);

  const handleProgress = ({ playedSeconds }) => {
    setTimePassed(playedSeconds);
  };

  const handleVideoEnded = () => {
    if (videoMapping[index + 1] != null) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const videoMapping = [
    {
      url: "https://www.dropbox.com/scl/fi/nfmvuywq6kzhcy06rsqtb/Derawan-1080p.mp4?rlkey=k088tyy600khrklskhh9alqk9&st=biiq9s09&dl=0",
      place: "Derawan",
    },
    {
      url: "https://www.dropbox.com/scl/fi/udbrsvd1ihzs0wvi05j9l/Kumala-1080p.mp4?rlkey=ob1a6yvd7544gvf16ov6dhv5c&st=mbs4sb7f&dl=0",
      place: "Raja Island",
    },
    {
      url: "https://www.dropbox.com/scl/fi/kblkxzqmgn3z250x3m247/Mangrove-River-1080p.mp4?rlkey=7xwlys4n4ne6npsikjdgz7pw7&st=irgrc8zk&dl=0",
      place: "Mangrove River",
    },
  ];

  useEffect(() => {
    setCurrentPlace(videoMapping[index].place);

    console.log(isLoading);
  }, [index, isLoading]);

  return (
    <videoNavigationContext.Provider value={{ index, setIndex, currentPlace }}>
      <VideoPausedByHoverContext.Provider
        value={{ isPausedByHover, setIsPausedByHover }}
      >
        <VideoPausedByToggleContext.Provider
          value={{ isPausedByToggle, setIsPausedByToggle }}
        >
          <MobileHeroSection />
          <div
            className={`relative hidden h-screen w-full overflow-hidden sm:block`}
          >
            <div className={`relative h-screen w-full sm:h-full`}>
              {isLoading && (
                <div className="absolute z-50 flex h-full w-full items-center justify-center bg-black/70">
                  <div className="text-white">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
                  </div>
                </div>
              )}
              {start && !isLoading && (
                <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center gap-y-4">
                  <h1 className="text-5xl font-bold">Welcome To Kaltim</h1>
                  <p className="text-2xl">
                    Discover New Places and Create Unforgettable Memories
                  </p>
                  <button
                    onClick={() => {
                      setStart(false);
                      setIsPausedByHover(false);
                      setIsPausedByToggle(false);
                    }}
                    className="rounded-full border border-white px-7 py-2 text-xl"
                  >
                    Start
                  </button>
                </div>
              )}
              <div
                className={`${isPausedByHover && "brightness-50"} h-screen sm:h-auto`}
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
                  onEnded={handleVideoEnded}
                  onReady={() => setIsLoading(false)}
                  onBuffer={() => setIsLoading(true)}
                  onBufferEnd={() => setIsLoading(false)}
                />
              </div>
            </div>
            <div
              className={`${isPausedByHover && "hidden"} absolute bottom-20 w-full`}
            >
              <HeroFooter />
            </div>
          </div>
        </VideoPausedByToggleContext.Provider>
      </VideoPausedByHoverContext.Provider>
    </videoNavigationContext.Provider>
  );
}

function MobileHeroSection() {
  return (
    <div className="relative block h-screen min-h-screen w-full sm:hidden">
      <ParallaxBanner
        layers={[
          {
            image:
              "https://www.dropbox.com/scl/fi/89w6g9u9sa4gfdudtr2vx/banner_derawan.webp?rlkey=fhwt87bplppzxvsj5s1z180qy&st=5xdbh973&dl=0&raw=1",
            speed: -20,
            translateY: [-25, 50],
          },
        ]}
        className="h-screen w-full object-cover sm:object-fill"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-5">
        <p className="text-center text-4xl font-bold text-slate-200 text-shadow-5xl">
          Discover New Places and Create Unforgettable Memories in Kaltim
        </p>
        <Link
          to={"/destination#banner"}
          className="rounded-xl border-2 border-white p-2 text-2xl font-bold text-shadow-xl"
        >
          Destinations
        </Link>
      </div>
    </div>
  );
}
