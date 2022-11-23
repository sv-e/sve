import SvgSprite from "assets/sprite/sprite.svg";

export default function Icon({ className, icon }){
  return (
    <svg className={`icon icon-${icon} ${className}`}>
      <use xlinkHref={`${SvgSprite}#icon-${icon}`}></use>
    </svg>
  );
}

