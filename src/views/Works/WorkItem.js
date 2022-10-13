// import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export default function WorkItem({ work }){
	return (
		<>
      <div
        className="
          rounded-3xl
          card
          max-h-[18.75rem]
          pt-[100%]
        ">
        <span
          className="
            absolute
            top-0
            left-0
            w-full
            h-full
            rounded-3xl
            flex
            items-center
            justify-center
          ">
            <Link to={`${work.id}`}>
              <strong>{work.id}</strong> {work.name}
            </Link>
        </span>
      </div>
		</>
	);
}