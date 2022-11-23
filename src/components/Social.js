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
          sm:mt-10
          lg:mt-12.7
          hlg-xs:mt-0 hlg:mt-8
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
            className="w-4 h-4" />
        </a>
      </li>
      <li
        className="
          ml-10
          sm:ml-0
          sm:mt-10
          lg:mt-12.7
          hlg-xs:mt-0 hlg:mt-8
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
          ">
          <Icon
            icon="github"
            className="w-4 h-4" />
        </a>
      </li>
      <li
        className="
          ml-10
          sm:ml-0
          sm:mt-10
          lg:mt-12.7
          hlg-xs:mt-0 hlg:mt-8
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
            className="w-4 h-4" />
        </a>
      </li>
      <li
        className="
          ml-10
          sm:ml-0
          sm:mt-10
          lg:mt-12.7
          hlg-xs:mt-0 hlg:mt-8
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
            className="w-4 h-4" />
        </a>
      </li>
      <li
        className="
          ml-10
          sm:ml-0
          sm:mt-10
          lg:mt-12.7
          hlg-xs:mt-0 hlg:mt-8
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
            icon="linkedin"
            className="w-4 h-4" />
        </a>
      </li>
      <li
        className="
          ml-10
          sm:ml-0
          sm:mt-10
          lg:mt-12.7
          hlg-xs:mt-0 hlg:mt-8
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
            className="w-4 h-4" />
        </a>
      </li>
    </ul>
  );
}
