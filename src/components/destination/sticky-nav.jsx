import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function StickyNav() {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      },
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 flex w-full justify-center bg-zinc-800 px-5 py-6 sm:px-24">
      <ul className="flex sm:space-x-16 space-x-2 text-base">
        <li>
          <Link
            smooth
            to="#beaches"
            className={`text-shadow-lg rounded-full px-6 py-4 font-semibold hover:text-blue-500 ${
              activeId === "beaches"
                ? "border-2 border-blue-500 text-blue-500"
                : "text-white"
            }`}
          >
            Beaches
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="#nature"
            className={`text-shadow-lg rounded-full px-6 py-4 font-semibold hover:text-blue-500 ${
              activeId === "nature"
                ? "border-2 border-blue-500 text-blue-500"
                : "text-white"
            }`}
          >
            Nature
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="#other"
            className={`text-shadow-lg rounded-full px-6 py-4 font-semibold hover:text-blue-500 ${
              activeId === "other"
                ? "border-2 border-blue-500 text-blue-500"
                : "text-white"
            }`}
          >
            Other
          </Link>
        </li>
      </ul>
    </div>
  );
}
