import React, { useEffect, useState } from 'react';

// Custom hook `useMousePosition` untuk mendapatkan posisi mouse secara real-time.
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState(0); 
  // State `mousePosition` digunakan untuk menyimpan posisi kursor mouse (koordinat x dan y).

  React.useEffect(() => {
    const updateMousePosition = ev => {
      // Fungsi `updateMousePosition` digunakan untuk memperbarui posisi mouse berdasarkan event `mousemove`.
      setMousePosition({ x: ev.clientX, y: ev.clientY }); 
      // Menyimpan posisi x dan y dari event mouse ke dalam state `mousePosition`.
    };

    window.addEventListener('mousemove', updateMousePosition); 
    // Menambahkan event listener untuk mendeteksi gerakan mouse pada jendela (window).

    return () => {
      window.removeEventListener('mousemove', updateMousePosition); 
      // Membersihkan event listener ketika komponen dilepas untuk mencegah memory leaks.
    };
  }, []); 
  // Dependency array kosong memastikan efek hanya berjalan sekali saat pertama kali hook digunakan.

  return mousePosition; 
  // Mengembalikan posisi mouse dalam bentuk objek {x, y}.
};

// Custom hook `useScaleTransformPercentage` untuk menghitung transformasi skala elemen berdasarkan posisi mouse.
const useScaleTransformPercentage = () => {
  const [xyPercent, setXYPercent] = useState({xPercent: 0, yPercent: 0}); 
  // State `xyPercent` digunakan untuk menyimpan persentase transformasi dalam arah x dan y.

  const mousePosition = useMousePosition(); 
  // Menggunakan custom hook `useMousePosition` untuk mendapatkan posisi mouse.

  const scale = 1.2; 
  // Konstanta `scale` digunakan sebagai nilai pengali untuk efek skala.

  function calculatePercentage() {
    // Fungsi untuk menghitung transformasi dalam bentuk persentase berdasarkan posisi mouse.
    setXYPercent({
      xPercent: 
        ((mousePosition.x / window.innerWidth) * 100 - 50) 
        // Mengubah posisi x menjadi persentase dari lebar layar dan menyesuaikan dengan titik tengah (50%).
        / -scale / 2 / 1.5 / 1.4 / 1.3 / 1.2 / 1.1, 
        // Mengurangi nilai persentase dengan pembagian bertahap untuk menghasilkan transformasi yang lebih halus.
      
      yPercent: 
        ((mousePosition.y / window.innerHeight) * 100 - 50) 
        // Mengubah posisi y menjadi persentase dari tinggi layar dan menyesuaikan dengan titik tengah (50%).
        / -scale / 2 / 1.5 / 1.4 / 1.3 / 1.2 / 1.1 
        // Sama seperti pada `xPercent`, menggunakan pembagian bertahap untuk transformasi halus.
    });    
  }

  function calculatePercentageOnMobile() {
    // Placeholder untuk menghitung transformasi jika diperlukan logika khusus pada perangkat mobile.
    setXYPercent();
    // Fungsi ini belum diimplementasikan dan hanya ada sebagai kerangka.
  }

  useEffect(() => {
    calculatePercentage(); 
    // Memanggil fungsi `calculatePercentage` setiap kali posisi mouse berubah.
  }, [mousePosition]); 
  // Efek akan dijalankan kembali jika nilai `mousePosition` berubah.

  return { scale, xyPercent }; 
  // Mengembalikan nilai skala dan persentase transformasi dalam bentuk objek.
};

export default useScaleTransformPercentage; 
// Mengekspor default custom hook `useScaleTransformPercentage`.
