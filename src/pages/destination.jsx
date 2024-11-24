import Banner from "@/components/common/banner";
import huaGuang from "@/assets/huaguang.jpg";
import StickyNav from "@/components/destination/sticky-nav";
import DestinationSection from "@/components/destination/destination-section";
import SearchDestination from "@/components/destination/search-bar";
import AnimatedLayout from "@/layout/animated-layout";

export default function DestinationPage() {
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

  return (
    <>
      <AnimatedLayout>
        <Banner
          title={"DESTINATION"}
          location={"Zhangjiajie National Forest Park"}
          img={huaGuang}
        />
        <div className="w-full gap-y-2 px-5 py-8 sm:grid sm:px-24">
          <p className="text-xl sm:px-4">Quickly search where you want to go</p>
          <SearchDestination />
        </div>
        <div className="gap-y-28 px-5 sm:grid sm:px-24">
          <StickyNav />
          <DestinationSection
            id={"beaches"}
            items={holiday}
            title={"Beaches"}
            desc={"Best beaches for your holiday"}
          />
          <DestinationSection
            id={"nature"}
            items={holiday}
            title={"Nature"}
            desc={"Wanna break from reality? come here to feels mother nature"}
          />
          <DestinationSection
            id={"other"}
            items={holiday}
            title={"Other"}
            desc={"Kaltim is not just two of that, there's more to explore !!"}
          />
        </div>
      </AnimatedLayout>
    </>
  );
}
