import { motion } from "framer-motion"; 
// Mengimpor `motion` dari Framer Motion untuk menambahkan animasi pada elemen.

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 }, 
  // Definisi animasi ketika elemen disembunyikan (awal atau keluar).
  enter: { opacity: 1, x: 0, y: 0 }, 
  // Definisi animasi ketika elemen masuk (tampil).
  exit: { opacity: 0, x: 0, y: 20 }, 
  // Definisi animasi ketika elemen keluar.
};

export default function AnimatedLayout({ children }) {
  // Membuat komponen `AnimatedLayout` untuk membungkus elemen lain dan memberikan animasi.
  
  return (
    <motion.div
      initial="hidden" 
      // Status awal elemen (menggunakan varian `hidden`).
      animate="enter" 
      // Status ketika elemen ditampilkan (menggunakan varian `enter`).
      exit="exit" 
      // Status ketika elemen dihapus (menggunakan varian `exit`).
      variants={variants} 
      // Menghubungkan varian animasi yang sudah didefinisikan.
      transition={{ duration: 0.5, type: "easeInOut" }} 
      // Menentukan durasi animasi (0.5 detik) dengan tipe transisi "easeInOut".
      className="relative"
      // Memberikan kelas CSS `relative` untuk penataan elemen.
    >
      {children} 
      {/* Menampilkan elemen anak (children) yang dibungkus oleh `motion.div`. */}
    </motion.div>
  );
}
