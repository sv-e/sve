import Nav from "./Nav";
import Social from "../components/Social";
import Copyright from "../components/Copyright";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MainLayout({children}){
  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap
      //   .to("h1", {
      //     startAt: { y: -100, opacity: 0 },
      //     y: 0,
      //     duration: 1,
      //     opacity: 1
      //   });
      // gsap
      //   .to(".meta", {
      //     startAt: { y: 100, opacity: 0 },
      //     y: 0,
      //     duration: 1,
      //     opacity: 1
      //   });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Nav />
      <div
        className="neo">
        <div className="neo-center">
          <div className="neo-waves"></div>
        </div>        
      </div>
      <div
        ref={root}
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

        <Social />
        <Copyright />
      </div>      
    </>
  );
}