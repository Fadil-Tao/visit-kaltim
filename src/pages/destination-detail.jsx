import Banner from "@/components/common/banner";
import AboutSection from "@/components/dest-detail/about";
import DetailSection from "@/components/dest-detail/detail";
import Highlight from "@/components/dest-detail/highlight";
import AnimatedLayout from "@/layout/animated-layout";
import { Destinations } from "@/data/fakedata";
import { useParams } from "react-router-dom";

export default function DestinationDetailPage() {
  const { slug } = useParams();
  let destination = Destinations.find((item) => item.title === slug);

  if (destination === undefined){
    return <div className="min-h-screen w-full flex justify-center items-center">404 NOT FOUND</div>
  }

  return (
    <>
      <AnimatedLayout>
        <Banner
          title={destination.title
            .split("_")
            .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
            .join(" ")}
          img={destination.banner_url}
        />
        <AboutSection
          text={destination.about}
          proximity={destination.proximity}
          highlight={destination.highlight}
        />
        <div className="gap-y-12 px-5 sm:grid sm:px-24">
          <DetailSection text={destination.details} />
          <Highlight array={destination.highlights} />
          <p className="my-12 text-5xl">Location</p>
          <iframe
            src={destination.location_src}
            className="w-full rounded-xl"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </AnimatedLayout>
    </>
  );
}
