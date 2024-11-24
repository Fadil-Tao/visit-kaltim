import Banner from "@/components/common/banner";
import AboutSection from "@/components/dest-detail/about";
import DetailSection from "@/components/dest-detail/detail";
import Highlight from "@/components/dest-detail/highlight";
import AnimatedLayout from "@/layout/animated-layout";
export default function DestinationDetailPage() {
  return (
    <>
      <AnimatedLayout>
        <Banner
          title={"Gunung Fajri"}
          img={
            "https://wallpapercat.com/w/full/b/1/4/1518609-3840x2160-desktop-4k-mount-fuji-japan-wallpaper-image.jpg"
          }
          location={"Honshu, Japan"}
        />
        <AboutSection />
        <div className="gap-y-12 px-5 sm:grid sm:px-24">
          <DetailSection />
          <Highlight />
          <p className="my-12 text-5xl">Location</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26030.395553315946!2d138.70676380614015!3d35.360623252281506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019629a42fdc899%3A0xa6a1fcc916f3a4df!2sGn.%20Fuji!5e0!3m2!1sid!2sid!4v1732473106828!5m2!1sid!2sid"
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
