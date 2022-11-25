import Icon from "./Icon";

export default function Social(){
  return (
    <ul
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
      <li
        className="
          ml-0
          sm:ml-0
          sm:mt-5
          lg:mt-[4vh]
        ">
        <a
          href="https://codepen.io/semenchenko/"
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
            icon="codepen"
            className="
              w-4
              h-4
              lg:w-[calc(0.75rem+0.5vh)]
              lg:h-[calc(0.75rem+0.5vh)]
            " />
        </a>
      </li>
      <li
        className="
          ml-10
          sm:ml-0
          sm:mt-5
          lg:mt-[4vh]
        ">
        <a
          href="https://github.com/lime7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Social link"
          className="
            text-sev-dark
            dark:text-white
            transition
            duration-300
            ease-linear
            p-2
            lg:p-[0.5vh]
          ">
          <Icon
            icon="github"
            className="
              w-4
              h-4
              lg:w-[calc(0.75rem+0.5vh)]
              lg:h-[calc(0.75rem+0.5vh)]
            " />
        </a>
      </li>
      <li
        className="
          ml-10
          sm:ml-0
          sm:mt-5
          lg:mt-[4vh]
        ">
        <a
          href="https://stackblitz.com/@lime7"
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
            icon="stackblitz"
            className="
              w-4
              h-4
              lg:w-[calc(0.75rem+0.5vh)]
              lg:h-[calc(0.75rem+0.5vh)]
            " />
        </a>
      </li>
      <li
        className="
          ml-10
          sm:ml-0
          sm:mt-5
          lg:mt-[4vh]
        ">
        <a
          href="https://stackexchange.com/users/8595873/hamster"
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
            icon="so"
            className="
              w-4
              h-4
              lg:w-[calc(0.75rem+0.5vh)]
              lg:h-[calc(0.75rem+0.5vh)]
            " />
        </a>
      </li>
      <li
        className="
          ml-10
          sm:ml-0
          sm:mt-5
          lg:mt-[4vh]
        ">
        <a
          href="https://www.linkedin.com/in/elena-s/"
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
            icon="linkedin"
            className="
              w-4
              h-4
              lg:w-[calc(0.75rem+0.5vh)]
              lg:h-[calc(0.75rem+0.5vh)]
            " />
        </a>
      </li>
      <li
        className="
          ml-10
          sm:ml-0
          sm:mt-5
          lg:mt-[4vh]
        ">
        <a
          href="https://www.buymeacoffee.com/lime27"
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
            icon="bmc"
            className="
              w-4
              h-4
              lg:w-[calc(0.75rem+0.5vh)]
              lg:h-[calc(0.75rem+0.5vh)]
            " />
        </a>
      </li>
    </ul>
  );
}
