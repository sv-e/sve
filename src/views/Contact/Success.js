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
          flex
          items-center
          justify-center
          bg-white/[.37]
          dark:bg-black/[.5]
          ${show ? "visible" : "hidden"}
        `}>
        <div
          className="
            relative
            p-4
            w-full            
            h-full
            mx-auto
            md:h-auto
          ">

          <div
            className="
              relative
              max-w-lg
              mx-auto
              bg-white/[.98]
              dark:bg-black/[.87]
              rounded-3xl
              p-[7%]
              text-center
              backdrop-blur-md
              shadow-modal
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
              <div className="mb-8">
                <h2
                  className="
                    text-3xl
                    uppercase
                    font-semibold
                    text-sev-dark
                    dark:text-white
                    mb-2
                  ">
                  <FormattedMessage id="success" />
                </h2>
                <p
                  className="
                    text-sev-gray-300
                    dark:text-sev-gray-100
                  ">
                  <FormattedMessage id="successMessage" />
                </p>
              </div>

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
                <Icon
                  icon="close"
                  className="
                    w-10
                    h-10
                  " />
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
