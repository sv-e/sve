import { FormattedMessage } from "react-intl";
import CV from "../media/CV-2022.pdf";
import Icon from "./Icon";

const Button = () => {
  return (
    <button
      className="
        berry
        group
        text-xs
        leading-none
        font-medium
        uppercase
        inline-flex
        items-center
        justify-center
        px-6
        h-12.7
        rounded-full
        grow-0
        shrink-0
        transition
        duration-200
        ease-linear
        relative
        before:absolute
        before:left-0
        before:top-0
        before:w-full
        before:h-full
        md:hover:translate-y-1
      "
      onClick={() => window.open(CV)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="CV">
      <span
        className="
          inline-flex
          items-center
          justify-center
          transition
          duration-200
          ease-linear
          md:group-hover:-translate-y-[2px]
        ">
        <Icon
          icon="dw"
          className="
            w-4
            h-4
            mr-4
          " />
        <span>
          <FormattedMessage id="downloadCV" />
        </span>
      </span>
    </button>
  );
};

export default Button;
