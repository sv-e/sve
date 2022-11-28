import Icon from "./Icon";

const socialList = [
  {id: 1, link: "https://codepen.io/semenchenko/", icon: "codepen"},
  {id: 2, link: "https://github.com/lime7", icon: "github"},
  {id: 3, link: "https://stackblitz.com/@lime7", icon: "stackblitz"},
  {id: 4, link: "https://stackexchange.com/users/8595873/hamster", icon: "so"},
  {id: 6, link: "https://www.buymeacoffee.com/lime27", icon: "bmc"}
];

const Social = ({ socialRef }, { ref }) => {
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
      {socialList.map((social, index) => {
        return (
          <li
            key={index}
            ref={(el) => {
              socialRef.current[index] = el;
            }}
            className="
              ml-10
              sm:ml-0
              sm:mt-5
              lg:mt-[4vh]
              will-change-transform
              max-lg:!transform-none
              max-lg:!opacity-100
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
