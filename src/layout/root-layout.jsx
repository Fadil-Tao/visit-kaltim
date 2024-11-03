import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar";

export default function RootLayout(){
   return(
    <>
        <NavBar/>
        <main className="bg-black">
            <Outlet/>
        </main>
        {/* <footer className="font-bold">Copyright Kelompok</footer> */}
    </>

   )
}