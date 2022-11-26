import SvgSprite from "assets/sprite/sprite.svg";

const Icon = ({ icon, className }) => {
  return (
    <svg className={`icon icon-${icon} ${className}`}>
      <use xlinkHref={`${SvgSprite}#icon-${icon}`}></use>
    </svg>
  );
};

export default Icon;
