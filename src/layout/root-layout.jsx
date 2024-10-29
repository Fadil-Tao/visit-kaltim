import { Outlet } from "react-router-dom";

export default function RootLayout(){
   return(
    <>
        <nav>nanti nav</nav>
        <main>
            <Outlet/>
        </main>
        <footer className="font-bold">Copyright Kelompok</footer>
    </>

   )
}