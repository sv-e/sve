import { FormattedMessage, useIntl } from "react-intl";
import Button from "../../components/Button";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import anime from "animejs";

const Home = () => {
  const { formatMessage } = useIntl();

  const root = useRef();

  // const tl = gsap.timeline();
  // const h1 = useRef(null);

  const itemsRef = useRef([]);

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

      anime.timeline({ loop: false }).add({
        targets: itemsRef.current,
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: function (el, i) {
          return 50 * i;
        }
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
      ">
      <h1 className="        
        uppercase
        font-bold
        text-sev-dark
        dark:text-white
        my-4
        text-3xl
        lg:text-[5vh]
        leading-tight
        landscape:bg-red
      ">
        <FormattedMessage id="wellcome" />

        {formatMessage({ id: "wellcome" }).split("").map((item, index) => {
          return (
            <div
              className="i"
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
            >
              {item} &nbsp;
            </div>
          );
        })}
      </h1>

      <div
        className="
          my-4
          sm:my-5
          md:my-5
          lg:m-auto
        ">
        <Button />
      </div>

      <div className="
        meta
        text-[calc(0.75rem+0.25vh)]
        leading-[calc(1rem+1vh)]
        text-sev-gray-300
        dark:text-sev-gray-100
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
