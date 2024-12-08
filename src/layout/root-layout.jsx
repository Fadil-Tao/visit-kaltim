//  import komponen yang dibutuhkan coba klik kanan nama komponenya otomatis kepindah
import NavBar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { ParallaxProvider } from "react-scroll-parallax";
import AnimatedOutlet from "./animated-outlet";
//  nyusun nyusun dari komponen
export default function RootLayout() {
  return (
    <>
    {/* parralax provider wajib dibungkus diluar sini jadi supaya paralax effect di banner work */}
      <ParallaxProvider>
        <main className="relative bg-[#121212]">
          <NavBar />
          <AnimatedOutlet />
        </main>
        <Footer />
      </ParallaxProvider>
    </>
  );
}
