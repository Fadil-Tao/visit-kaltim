import { HashLink as Link } from 'react-router-hash-link';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center fixed top-0 bg-transparent z-10 w-full sm:py-8 sm:px-24 font-semibold text-2xl">
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
