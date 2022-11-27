import Nav from "./Nav";
import Social from "../components/Social";
import Copyright from "../components/Copyright";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MainLayout({children}){
  const root = useRef();

  const navRef = useRef(null);
  const copyrightRef = useRef(null);
  const socialRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(navRef.current, 1, {
        delay: 0.1,
        opacity: 0,
        top: "-100%",
        ease: "power1.easeInOut"
      });

      gsap.from(copyrightRef.current, 2, {
        delay: 1.7,
        opacity: 0,
        x: 20,
        ease: "power1.easeInOut"
      });

      gsap.from(socialRef.current, 2, {
        delay: 1.7,
        opacity: 0,
        x: -20,
        ease: "power1.easeInOut"
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="min-h-screen">
      <Nav navRef={navRef} />
      <div
        className="neo">
        <div className="neo-center">
          <div className="neo-waves"></div>
        </div>        
      </div>
      <div        
        className="
          w-screen
          overflow-hidden
          min-h-screen
          flex
          flex-col
          items-center
          justify-between
          pt-20
          pb-14
          px-4
          sm:py-20
          sm:px-20
          md:p-24
          lg:p-28
          lg:pb-10
        ">
        {children}

        <Social socialRef={socialRef} />
        <Copyright copyrightRef={copyrightRef} />
      </div>      
    </div>
  );
}