import { FormattedMessage } from "react-intl";

const Copyright = ({ copyrightRef }, { ref }) => {
  return (
    <div
      ref={copyrightRef}
      className="
        sm:fixed
        sm:right-0
        sm:top-0
        sm:bottom-0
        sm:right-0
        sm:w-20
        md:w-24
        lg:w-28
        pointer-events-none
        will-change-transform
        max-lg:!transform-none
        max-lg:!opacity-100
      ">
      <span
        ref={copyrightRef}
        className="
          block
          whitespace-nowrap
          text-sev-gray-300
          dark:text-sev-gray-100
          uppercase
          tracking-[2px]
          sm:fixed
          sm:rotate-90
          sm:translate-y-full
          sm:origin-top-right
          sm:w-[100vh]
          sm:right-0
          sm:bottom-0
          text-center
          sm:mr-4
          xl:mr-12.7
          xxl:text-base
          mb-4
          sm:mb-0
          select-none
          text-[calc(0.625rem+0.25vh)]
          leading-[calc(0.75rem+1vh)]
        ">
        <FormattedMessage id="copyright" values={{ tag: new Date().getFullYear() }} />
      </span>
    </div>
  );
};

export default Copyright;
