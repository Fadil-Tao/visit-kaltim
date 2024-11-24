import { AnimatePresence } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import React from 'react';

export default function AnimatedOutlet() {
  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode="wait" initial={true}>
      {element && React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
