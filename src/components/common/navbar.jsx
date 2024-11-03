import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav 
      className={`flex justify-between z-30 items-center fixed top-0 w-full sm:py-8 sm:px-24 font-semibold text-2xl transition-colors duration-300 ${
        isScrolled ? "bg-black " : "bg-transparent "
      }`}
      >
      <div>
        <Link to={'/'}>
          Visit Kaltim
        </Link>
      </div>
      <div className="flex gap-x-20">
        <Link to={"/#about"}>About</Link>
        <Link to={"/#popularDestination"}>Popular Destination</Link>
        <Link to={"/#testimonial"}>Our Visitor</Link>
        <Link to={"/#gallery"}>Gallery</Link>
      </div>
    </nav>
  );
}
