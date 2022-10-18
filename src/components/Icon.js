export default function Icon({ className, icon }){
  return (
    <svg className={`icon icon-${icon} ${className}`}>
      <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-${icon}`}></use>
    </svg>
  );
}

