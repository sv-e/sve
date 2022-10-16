// import { FormattedMessage } from "react-intl";
import WorkItem from "./WorkItem";

export default function WorkList({ works }){
	return (
		<>
      <div
        className="
          bg-white/[.35]
          dark:bg-sev-neo-10
          rounded-3xl
          p-[7%]
          w-full
          h-[fit-content]
          backdrop-blur-md
          relative
          after:rounded-3xl
          after:w-4/5
          after:h-4/5
          after:absolute
          after:-left-[7%]
          after:-bottom-[7%]
          after:bg-sev-neo-27
          dark:after:bg-sev-neo-10
          after:blur-2xl
          after:z-[-1]
          m-[2%]
          glass
        ">
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
            h-full
          ">
          {works?.map((work) => (
            <WorkItem
              key={work.id}
              work={work}/>
          ))}
        </div>
      </div>
		</>
	);
}