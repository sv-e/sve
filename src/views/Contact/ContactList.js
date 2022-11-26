// import { FormattedMessage } from "react-intl";
import Icon from "../../components/Icon";

export default function ContactList(){
  return (
    <div
      className="
        meta
        text-[calc(0.75rem+0.25vh)]
        leading-[calc(1rem+1vh)]
        my-auto
        text-sev-gray-300
        dark:text-white
        select-none
      ">
      {/* <a
        href="https://t.me/semen4enkov"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Telegram"
        className="
          flex
          items-center
          justify-center

        ">
          <Icon icon="telegram" className="mr-2" />
          <FormattedMessage id="message" />          
      </a> */}
      <a
        href="mailto:sv4e.space@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Telegram"
        className="
          flex
          items-center
          justify-center
          mt-4
        ">
          <Icon
            icon="email"
            className="
              w-4
              h-4
              mr-2
            " />
          <span>
            sv4e.space@gmail.com
          </span>   
      </a>
    </div>
  );
}
