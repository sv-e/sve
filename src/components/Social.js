import Icon from "./Icon";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const socialList = [
  {id: 1, link: "https://codepen.io/semenchenko/", icon: "codepen"},
  {id: 2, link: "https://github.com/lime7", icon: "github"},
  {id: 3, link: "https://stackblitz.com/@lime7", icon: "stackblitz"},
  {id: 4, link: "https://stackexchange.com/users/8595873/hamster", icon: "so"},
  {id: 5, link: "https://www.linkedin.com/in/elena-s/", icon: "linkedin"},
  {id: 6, link: "https://www.buymeacoffee.com/lime27", icon: "bmc"}
];

const Social = () => {
  const root = useRef();

  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(itemsRef.current, 2, {
        delay: 2.7,
        opacity: 0,
        y: 20,
        ease: "power3.easeInOut"
      }, 0.1);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <ul
      ref={root}
      className="
        flex
        sm:flex-col
        items-center
        justify-center
        text-sev-dark
        sm:fixed
        sm:top-1/2
        sm:-translate-y-1/2
        sm:left-0
        text-center
        sm:ml-4
        list-none
        xl:ml-12.7
        mb-4
        sm:mb-0
        mt-4
        lg:mt-0
      ">
      {socialList.map((social, index) => {
        return (
          <li
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="
              ml-10
              sm:ml-0
              sm:mt-5
              lg:mt-[4vh]
            ">
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Social link"
              className="
                text-sev-dark
                dark:text-white
                transition
                duration-300
                ease-linear
              ">
              <Icon
                icon={social.icon}
                className="
                  w-4
                  h-4
                  lg:w-[calc(0.75rem+0.5vh)]
                  lg:h-[calc(0.75rem+0.5vh)]
                " />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
