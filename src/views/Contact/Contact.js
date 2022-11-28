import { FormattedMessage } from "react-intl";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Contact = () => {
  const root = useRef();

  const h1 = useRef(null);
  const metaRef = useRef(null);
  const formRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(h1.current, 2, {
        delay: 0.25,
        opacity: 0,
        y: 30,
        ease: "power1.easeInOut"
      });

      gsap.from(formRef.current, 2, {
        delay: 0.5,
        opacity: 0,
        y: 30,
        ease: "power1.easeInOut"
      });

      gsap.from(metaRef.current, 2, {
        delay: 0.75,
        opacity: 0,
        y: 30,
        ease: "power1.easeInOut"
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
          will-change-transform
          max-lg:!transform-none
          max-lg:!opacity-100
        ">
        <FormattedMessage id="contact" />
      </h1>

      <div
        ref={formRef}
        className="
          relative
          bg-white/[.35]
          dark:bg-white/[.15]
          rounded-3xl
          p-[7%]
          w-full
          h-[fit-content]
          after:hidden
          after:lg:block
          after:rounded-3xl
          after:w-4/5
          after:h-4/5
          after:absolute
          after:z-10
          after:-left-[7%]
          after:-bottom-[7%]
          after:bg-sev-dark-7
          dark:after:bg-sev-white-10
          after:blur-2xl
          after:z-[-1]
          m-[2%]
          max-w-xl
          glass
          max-lg:!transform-none
          max-lg:!opacity-100
        ">
          <div
            className="
              relative
              z-20
            ">
            <ContactForm />
          </div>
      </div>
      
      <div
        ref={metaRef}
        className="
          max-lg:!transform-none
          max-lg:!opacity-100
        ">
        <ContactList />
      </div>
    </div>
  );
};

export default Contact;
