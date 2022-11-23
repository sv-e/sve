import { useState } from "react";
import { FormattedMessage } from "react-intl";
import Icon from "./Icon";

export default function ScrollButton(){
  const [visible, setVisible] = useState(false);
    
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true);
    } 
    else if (scrolled <= 300){
      setVisible(false);
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: "smooth"
    });
  };
  
  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed
        z-20
        right-14
        bottom-8
        flex-col
        items-center
        justify-center
        text-sev-gray-300
        dark:text-sev-gray-100
      "
      style={{display: visible ? "flex" : "none"}}>
      <Icon
        icon="back"
        className="
          w-4
          h-4
          mb-2
          rotate-90
          text-neo-black
          dark:text-neo-white
        "/>
      <small>
        <FormattedMessage id="top" />
      </small>
    </button>
  );
}
