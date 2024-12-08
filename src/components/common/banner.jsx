import { useState, useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";


//  komponen banner digunakan untuks sebagai banner di
//  halaman daftar destinasi, daftar galeri, dan daftar destinasi
export default function Banner({ title, location, img }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //  ngeload image kalau image jadi semacam image loader
    const imgLoader = new Image();
    imgLoader.src = img;
    imgLoader.onload = () => setIsLoading(false);
  }, [img]);

  return (
    <section id="banner" className="relative h-screen w-full">
      {isLoading && (
        <div className="absolute z-50 flex h-full w-full items-center justify-center bg-black/70">
          <div className="text-white">
            <div className="animate-spin h-12 w-12 rounded-full border-4 border-t-transparent border-white"></div>
          </div>
        </div>
      )}
    {/*  parralax effect banner */}
    {/* is loading ngecek apakah loading ato gak */}
      {!isLoading && (
        <ParallaxBanner
          layers={[
            {
              image: img,
              speed: -20,
              translateY: [-25, 50],
            },
          ]}
          className="h-full w-full object-cover sm:object-fill"
        />
      )}

      {!isLoading && (
        <>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl font-bold text-shadow-lg sm:text-7xl">
            {title}
          </p>
          <p className="absolute bottom-10 right-10 text-xl font-semibold text-shadow-2xl">
            {location}
          </p>
        </>
      )}
    </section>
  );
}
