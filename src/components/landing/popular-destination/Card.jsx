import { HashLink as Link } from "react-router-hash-link";
//  card biasa yang digunakan untuk blok kotak kotak nampilin gambar popular destinasi
export default function PopularDestinationCard({ src, title, to }) {
  return (
    // hyperlink buat pindah halaman , to itu parameter yang nanti diisi mau pindah kemana
    <Link className="w-full sm:w-1/3" to={`destination/${to}#banner`}>
      <div className="mb-7 h-3/4 w-full overflow-hidden rounded-3xl">
        <img
          src={src}
          alt={title}
          className="h-full w-full transform rounded-3xl object-cover transition-transform duration-300 hover:scale-125"
        />
      </div>
      <p className="text-2xl font-semibold">
        {title}
      </p>
    </Link>
  );
}
