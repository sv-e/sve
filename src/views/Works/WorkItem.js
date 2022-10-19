import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function WorkItem({ work }){
  const info = useSelector((state) => state.info);

	return (
		<>
      <div
        className={`
          rounded-3xl
          card
          max-h-[18.75rem]
          ${work.size === 2 ? "col-span-2" : ""}
          ${info.countryCode === "ru" ? "" : ""}
          ${info.countryCode === "ru" || work.status ? "" : "hidden"}
        `}>
        <span
          className="
            top-0
            left-0
            w-full
            h-full
            rounded-3xl
            flex
            items-center
            justify-center
            overflow-hidden
          ">
            <Link
              to={`${work.id}`}
              className="
                block
                w-full
                h-full
              ">
              <img
                src={require("../../assets/images/works/" + work.id + ".webp")}
                alt={work.name}
                className="
                  block
                  w-full
                  h-full
                  object-cover
                " />
              {/* <span
                className="
                  absolute
                  top-0
                  left-0
                ">
                {work.name}
              </span> */}
            </Link>
        </span>
      </div>
		</>
	);
}