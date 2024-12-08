import { AnimatePresence } from "framer-motion"; 
// Mengimpor `AnimatePresence` dari Framer Motion untuk mengatur animasi saat elemen masuk/keluar dari DOM.

import { useLocation, useOutlet } from "react-router-dom"; 
// Mengimpor `useLocation` untuk mendapatkan lokasi rute saat ini, 
// dan `useOutlet` untuk mendapatkan komponen yang harus dirender di outlet.

import React from 'react'; 
// Mengimpor React untuk penggunaan `React.cloneElement`.

export default function AnimatedOutlet() {
  const location = useLocation(); 
  // Mendapatkan lokasi rute saat ini (sebagai objek dengan informasi seperti pathname).

  const element = useOutlet(); 
  // Mendapatkan elemen yang dirender oleh `Outlet` dari `react-router-dom`.

  return (
    <AnimatePresence mode="wait" initial={true}> 
      {/* Membungkus elemen dengan `AnimatePresence` untuk mengelola animasi ketika elemen masuk/keluar. 
          - `mode="wait"`: Menunggu animasi selesai sebelum mengganti elemen.
          - `initial={true}`: Mengaktifkan animasi pada render awal. */}
      {element && React.cloneElement(element, { key: location.pathname })} 
      {/* Jika elemen outlet ada, maka elemen tersebut diduplikasi dengan properti `key` berdasarkan pathname.
          - `React.cloneElement`: Mengkloning elemen untuk memberikan `key` unik, sehingga animasi berjalan saat rute berubah. */}
    </AnimatePresence>
  );
}
