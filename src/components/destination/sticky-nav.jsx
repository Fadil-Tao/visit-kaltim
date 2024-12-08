import { useEffect, useState } from "react"; 
// Importing React hooks `useEffect` and `useState` to manage component state and lifecycle behavior.

import { HashLink as Link } from "react-router-hash-link"; 
// Importing `HashLink` from the `react-router-hash-link` package for smooth scrolling to anchor links.

export default function StickyNav() { 
  // Defining a functional component named `StickyNav` and exporting it as the default export.

  const [activeId, setActiveId] = useState(null); 
  // Initializing a state variable `activeId` with `null`. 
  // This will track the ID of the currently active section in view.

  useEffect(() => { 
    // Using the `useEffect` hook to run a side effect after the component is mounted.

    const sections = document.querySelectorAll("section"); 
    // Selecting all `<section>` elements in the document.

    const observer = new IntersectionObserver( 
      (entries) => { 
        // Creating a new `IntersectionObserver` to monitor which sections are currently visible in the viewport.
        entries.forEach((entry) => { 
          // Looping through the observed elements (entries).
          if (entry.isIntersecting) { 
            // Checking if the current section is visible in the viewport.
            setActiveId(entry.target.id); 
            // Updating the `activeId` state to the `id` of the currently visible section.
          }
        });
      },
      {
        root: null, 
        // Setting the root as the viewport (default).
        threshold: 0.5, 
        // Triggering the observer when at least 50% of the section is visible.
      }
    );

    sections.forEach((section) => observer.observe(section)); 
    // Observing each section using the `IntersectionObserver`.

    return () => { 
      // Cleanup function to run when the component unmounts or before re-running the effect.
      sections.forEach((section) => observer.unobserve(section)); 
      // Unobserving all sections to prevent memory leaks.
    };
  }, []); 
  // Empty dependency array ensures the effect runs only once after the component mounts.

  return (
    <div className="sticky top-0 z-10 flex w-full justify-center bg-zinc-800 px-5 py-6 sm:px-24"> 
      {/* A `div` containing the navigation bar. 
          - `sticky top-0`: Makes the nav bar stick to the top of the viewport.
          - `z-10`: Ensures the nav bar is above other elements.
          - `flex w-full justify-center`: Aligns content in the center horizontally.
          - `bg-zinc-800 px-5 py-6 sm:px-24`: Adds padding and a dark background color. */}
      <ul className="flex sm:space-x-16 space-x-2 text-base"> 
        {/* An unordered list with horizontal spacing between items. 
            - `sm:space-x-16`: Large spacing for medium and larger screens.
            - `space-x-2`: Smaller spacing for smaller screens.
            - `text-base`: Sets the font size. */}
        <li>
          <Link
            smooth
            to="#beaches" 
            // Smoothly scrolls to the element with `id="beaches"` when clicked.
            className={`text-shadow-lg rounded-full px-6 py-4 font-semibold hover:text-blue-500 ${
              activeId === "beaches" 
              // Conditionally adds styles if the `activeId` matches the current link.
                ? "border-2 border-blue-500 text-blue-500" 
                // If active, the link gets a blue border and text color.
                : "text-white" 
                // Otherwise, the text color is white.
            }`}
          >
            Beaches 
            {/* Text for the navigation link. */}
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="#nature" 
            // Smoothly scrolls to the element with `id="nature"` when clicked.
            className={`text-shadow-lg rounded-full px-6 py-4 font-semibold hover:text-blue-500 ${
              activeId === "nature" 
                ? "border-2 border-blue-500 text-blue-500" 
                : "text-white" 
            }`}
          >
            Nature 
            {/* Text for the navigation link. */}
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="#other" 
            // Smoothly scrolls to the element with `id="other"` when clicked.
            className={`text-shadow-lg rounded-full px-6 py-4 font-semibold hover:text-blue-500 ${
              activeId === "other" 
                ? "border-2 border-blue-500 text-blue-500" 
                : "text-white" 
            }`}
          >
            Other 
            {/* Text for the navigation link. */}
          </Link>
        </li>
      </ul>
    </div>
  );
}
