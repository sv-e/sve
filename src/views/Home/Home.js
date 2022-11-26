import { FormattedMessage, useIntl } from "react-intl";
import Button from "../../components/Button";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import anime from "animejs";

const Home = () => {
  const { formatMessage } = useIntl();

  const root = useRef();

  // const tl = gsap.timeline();
  const h1 = useRef(null);
  const btn = useRef(null);
  const meta = useRef(null);

  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(h1.current, 2, {
        delay: 0.25,
        opacity: 0,
        y: 20,
        ease: "expo.easeInOut",
        immediateRender: !0
      });

      gsap.from(btn.current, 2, {
        delay: 0.5,
        opacity: 0,
        y: 20,
        ease: "expo.easeInOut",
        immediateRender: !0
      });

      gsap.from(meta.current, 2, {
        delay: 0.75,
        opacity: 0,
        y: 20,
        ease: "expo.easeInOut",
        immediateRender: !0
      });

      anime.timeline({ loop: false }).add({
        targets: itemsRef.current,
        translateY: [-180, 0],
        scale: [0, 1],
        opacity: [0, 1],
        rotationX: 0,
        rotationY: 0,
        duration: 1250,
        easing: "easeOutBack",
        delay: function (el, i) {
          return 500 + 50 * i;
        },
        immediateRender: true
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="
        flex
        flex-col
        items-center
        justify-between
        flex-auto
      ">
      <h1
        ref={h1}
        className="        
          uppercase
          font-bold
          text-sev-dark
          dark:text-white
          my-4
          text-3xl
          lg:text-[5vh]
          leading-tight
          flex
          items-center
          justify-center
          max-lg:!transform-none
          max-lg:!opacity-100
        ">
        {formatMessage({ id: "wellcome" }).split(" ").map((word, index) => {
          return (
            <div
              key={index}
              className="
                mr-4
                flex
              ">
              {word.split("").map((letter, i) => {
                return (
                  <div
                    className="inline-block origin-right"
                    key={i}
                    ref={(el) => {
                      itemsRef.current[i] = el;
                    }}>
                    {letter}
                  </div>
                );
              })}
            </div>            
          );
        })}
      </h1>

      <div
        ref={btn}
        className="
          my-4
          sm:my-5
          md:my-5
          lg:m-auto
          max-lg:!transform-none
          max-lg:!opacity-100
        ">
        <Button />
      </div>

      <div
        ref={meta}
        className="
          text-[calc(0.75rem+0.25vh)]
          leading-[calc(1rem+1vh)]
          text-sev-gray-300
          dark:text-sev-gray-100
          max-lg:!transform-none
          max-lg:!opacity-100
        ">
        <p className="mb-5">
          <FormattedMessage id="wellcomeDesc" values={{ tag: <br /> }}/>
        </p>

        <p className="m-0">
          <FormattedMessage id="wellcomeGo" />
        </p>
      </div>
    </div>
  );
};

export default Home;
