import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/slices/themeSlice";

const Switch = () => {
  const dispatch = useDispatch();

  const { themeStore: { isDarkTheme } } = useSelector((state) => ({ themeStore: state.themeStore }));

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(!isDarkTheme ? "dark" : "light");
    root.classList.add(isDarkTheme ? "dark" : "light");

  }, [isDarkTheme]);

  return (
    <div className="switch">
      <label        
        className="
          inline-flex
          relative
          items-center
          cursor-pointer
          select-none
        "
        htmlFor="theme-toggle">
        <input
          id="theme-toggle"
          className="sr-only peer"
          type="checkbox"
          role="switch"
          value={isDarkTheme ? "dark" : "light"}
          checked={isDarkTheme}
          onChange={() => dispatch(setTheme(!isDarkTheme))}
          aria-label="theme-toggle" />
        <span className="
          w-12.7
          h-7
          bg-sev-light
          shadow-switch-inner-dark
          rounded-full
          relative
          transition-all
          peer-checked:bg-sev-light
          peer-checked:shadow-switch-inner-light
          dark:bg-sev-dark
          dark:peer-checked:bg-sev-dark
          dark:peer-checked:shadow-switch-inner-dark
        ">
        </span>
        <span className="
          block
          overflow-hidden
          w-6
          h-6
          transition-all
          rounded-full
          absolute
          z-40
          top-[2px]
          left-[2px]          
          before:content-['']
          after:content-['']
          before:absolute
          after:absolute
          before:z-30
          after:z-10
          before:bg-sev-gray-200
          after:bg-sev-dark
          before:opacity-[45]
          before:blur-[3px]
          after:blur-[5px]
          before:w-[6px]
          before:h-[4px]
          before:bottom-[5px]
          before:right-[5px]
          before:transform[switch-matrix]
          after:bottom-[2px]
          after:left-[-2px]
          after:w-[calc(100%+2px)]
          after:h-[calc(100%+2px)]
          peer-checked:translate-x-full
          peer-checked:rotate-90
          bg-sev-gray-300
        ">
          <i className="
            block
            absolute
            z-20
            blur-[5px]
            top-[-3px]
            left-0
            w-[calc(100%-0.5rem)]
            h-[calc(100%-0.5rem)]
            bg-sev-gray-200
            dark:bg-sev-light
          " />
        </span>
      </label>
    </div>
  );
};

export default Switch;
