import { FormattedMessage } from "react-intl";
import Icon from "../../components/Icon";

export default function Success({ show, onHide }){
  return (
    <>
      <div 
        className={`
          overflow-y-auto
          overflow-x-hidden
          fixed
          top-0
          right-0
          left-0
          z-50
          w-full
          md:inset-0
          h-modal
          md:h-full
          justify-center
          items-center
          ${show ? "visible" : "hidden"}
        `}>
        <div
          className="
            relative
            p-4
            w-full
            max-w-lg
            h-full
            md:h-auto
          ">

          <div
            className="
              relative
              bg-white/[.92]
              dark:bg-sev-neo-10
              rounded-3xl
              p-[7%]
              text-center
              backdrop-blur-md
            ">

            <div>
              <div>
                <Icon
                  icon="send"
                  className="
                    mb-8
                    w-12
                    h-12
                    text-[#2ecc71]
                  " />
              </div>
              <h2 className="
                text-3xl
                uppercase
                font-semibold
                text-sev-dark
                dark:text-white
                mb-8
              ">
                <FormattedMessage id="success" />!
              </h2>

              <button
                type="button"
                className="
                  text-sev-dark
                  bg-transparent
                  hover:text-sev-dark
                  rounded-lg
                  text-sm
                  p-2
                  ml-auto
                  inline-flex
                  items-center
                "
                onClick={onHide}>
                close
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
