import { useState, useEffect } from 'react';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
 
    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 768) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }
    
    // create an event listener
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    });
    return isMobile;    
};