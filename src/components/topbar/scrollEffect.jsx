
  import { useState, useEffect } from "react";

 export function useScroll() {
    // storing this to get the scroll direction
   const [lastScrollTop, setLastScrollTop] = useState();
    // the offset of the document.body

    // eslint-disable-next-line
   const [bodyOffset, setBodyOffset] = useState(
     document.body.getBoundingClientRect()
   );
   
    
    // scroll direction would be either up or down
   const [scrollDirection, setScrollDirection] = useState();

   const listener = ()=> {
     setBodyOffset(document.body.getBoundingClientRect());
   
     setScrollDirection(lastScrollTop > window.pageYOffset ? "down" : "up");
     setLastScrollTop(window.pageYOffset);
   };

   useEffect(() => {
     window.addEventListener("scroll", listener);
     return () => {
       window.removeEventListener("scroll", listener);
     };
   });

   return {   
     scrollDirection
   };

  
 }


