import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Icon from "./Icon";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        flex
        items-center
        justify-center
        text-sev-gray-300
        dark:text-sev-gray-100
      ">
      <Icon
        icon="back"
        className="
          w-4
          h-4
          mr-2
          text-neo-black
          dark:text-neo-white
        "/>
      <small>
        <FormattedMessage id="back" />
      </small>
    </button>
  );
};

export default BackButton;
