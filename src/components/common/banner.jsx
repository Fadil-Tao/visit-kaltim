import { ParallaxBanner } from "react-scroll-parallax";

export default function Banner({ title, location, img }) {
  return (
    <section id="banner" className="relative h-screen w-full">
      <ParallaxBanner
        layers={[{ image: img, speed: -20,  translateY: [-25,50]}]}
        className="h-full w-full object-cover sm:object-fill"
      />
      {/* <img
        src={img}
        alt=""
        className="h-full w-full object-cover sm:object-fill"
      /> */}
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl font-bold text-shadow-lg sm:text-7xl">
        {title}
      </p>
      <p className="absolute bottom-10 right-10 text-xl font-semibold text-shadow-2xl">
        {location}
      </p>
    </section>
  );
}
