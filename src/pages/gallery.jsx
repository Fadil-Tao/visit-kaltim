import Banner from "@/components/common/banner";
import huaGuang from "@/assets/huaguang.jpg";
import StickyNav from "@/components/destination/sticky-nav";
import AnimatedLayout from "@/layout/animated-layout";
import GallerySectionCol from "@/components/gallery/gallery-section";
import { Destinations, Gallerys } from "@/data/fakedata";
export default function GalleryPage() {
  const holiday = [
    {
      img: "https://govt.chinadaily.com.cn/images/202110/28/617a679c498e6a12d107c9a4.jpeg",
      text: "Ghibli IRL frfr",
      to: "/destination/nigero",
    },
    {
      img: "https://govt.chinadaily.com.cn/images/202110/28/617a679c498e6a12d107c9a4.jpeg",
      text: "Ghibli IRL frfr",
      to: "/destination/nigero",
    },
    {
      img: "https://govt.chinadaily.com.cn/images/202110/28/617a679c498e6a12d107c9a4.jpeg",
      text: "Ghibli IRL frfr",
      to: "/destination/nigero",
    },
    {
      img: "https://govt.chinadaily.com.cn/images/202110/28/617a679c498e6a12d107c9a4.jpeg",
      text: "Ghibli IRL frfr",
      to: "/destination/nigero",
    },
    {
      img: "https://govt.chinadaily.com.cn/images/202110/28/617a679c498e6a12d107c9a4.jpeg",
      text: "Ghibli IRL frfr",
      to: "/destination/nigero",
    },
    {
      img: "https://govt.chinadaily.com.cn/images/202110/28/617a679c498e6a12d107c9a4.jpeg",
      text: "Ghibli IRL frfr",
      to: "/destination/nigero",
    },
  ];

  const nature = Gallerys.filter((item) => item.type === "nature")
  const other = Gallerys.filter((item) => item.type === "other")
  const beach = Gallerys.filter((item) => item.type === "beach")

  return (
    <>
      <AnimatedLayout>
        <Banner
          title={"GALLERY"}
          img={"https://www.dropbox.com/scl/fi/anjr4obq6nwv0eanrxz0z/huaguang-min.jpg?rlkey=f9l3h5juyztx5ktlg3h5ts9sg&st=tksbydqm&dl=0&raw=1"}
        />
        <div className="gap-y-28 px-5 sm:grid sm:px-24">
          <StickyNav />
          <GallerySectionCol
            id={"beaches"}
            items={beach}
            title={"Beaches"}
            desc={"Best beaches for your holiday"}
          />
          <GallerySectionCol
            id={"nature"}
            items={nature}
            title={"Nature"}
            desc={"Wanna break from reality? come here to feels mother nature"}
          />    
          <GallerySectionCol
            id={"other"}
            items={other}
            title={"Other"}
            desc={"Kaltim is not just two of that, there's more to explore !!"}
          />
        </div>
      </AnimatedLayout>
    </>
  );
}
