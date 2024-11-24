import React, { useEffect, useState } from 'react';

export const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState(0);

  React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

const useScaleTransformPercentage = () => {
    const [xyPercent, setXYPercent] = useState({xPercent: 0, yPercent: 0})
    const mousePosition = useMousePosition()
    const scale = 1.2;


    function calculatePercentage(){
        setXYPercent({
            xPercent: ((mousePosition.x / window.innerWidth) *  100 - 50) / -scale/2/1.5/1.4/1.3/1.2/1.1,
            yPercent: ((mousePosition.y / window.innerHeight) * 100 - 50) / -scale/2/1.5/1.4/1.3/1.2/1.1
        })    
    }

    function calculatePercentageOnMobile(){
        setXYPercent()
    }
    useEffect(()=> {
        calculatePercentage()
    }, [mousePosition])

    return {scale, xyPercent}
}


export default  useScaleTransformPercentage;