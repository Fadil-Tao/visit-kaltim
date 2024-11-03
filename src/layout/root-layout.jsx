import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar";
import Footer from "../components/common/footer";

export default function RootLayout(){
   return(
    <>
        <NavBar/>
        <main className="bg-[#121212]">
            <Outlet/>
        </main>
       <Footer/>
    </>

   )
}