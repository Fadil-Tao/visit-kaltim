//  import komponen yang dibutuhkan coba klik kanan nama komponenya otomatis kepindah
import Banner from "@/components/common/banner";
import huaGuang from "@/assets/huaguang.jpg";
import StickyNav from "@/components/destination/sticky-nav";
import DestinationSection from "@/components/destination/destination-section";
import SearchDestination from "@/components/destination/search-bar";
import AnimatedLayout from "@/layout/animated-layout";
import { Destinations } from "@/data/fakedata";
//  halaman localhost:5173/destination
export default function DestinationPage() {

  const beaches = Destinations.filter((item) => (item.type === 'beach'))
  const nature = Destinations.filter((item) => (item.type === 'nature'))
  const other = Destinations.filter((item) => (item.type === 'other'))

  return (
    <>
    {/* animated layout komponenn penting buat transisi animasi per halamna */}
      <AnimatedLayout>
        {/* sisanya inisiasi dan susun susun komponen berdaasarkan parammeneter nya yang
          silahkan cek komponennya masing masing
          */}
        <Banner title={"DESTINATION"} img={"https://www.dropbox.com/scl/fi/anjr4obq6nwv0eanrxz0z/huaguang-min.jpg?rlkey=f9l3h5juyztx5ktlg3h5ts9sg&st=tksbydqm&dl=0&raw=1"} />
        <div className="gap-y-28 px-5 sm:grid sm:px-24">
          <StickyNav />
          <DestinationSection
            id={"beaches"}
            items={beaches}
            title={"Beaches"}
            desc={"Best beaches for your holiday"}
          />
          <DestinationSection
            id={"nature"}
            items={nature}
            title={"Nature"}
            desc={"Wanna break from reality? come here to feels mother nature"}
          />
          <DestinationSection
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
