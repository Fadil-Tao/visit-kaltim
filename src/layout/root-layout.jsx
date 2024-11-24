import NavBar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { ParallaxProvider } from "react-scroll-parallax";
import AnimatedOutlet from "./animated-outlet";

export default function RootLayout() {
  return (
    <>
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
