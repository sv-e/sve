import WorkItem from "./WorkItem";

const WorkList = ({ works }) => {
  return (
    <div
      className="
        bg-white/[.35]
        dark:bg-white/[.15]
        rounded-3xl
        p-[7%]
        w-full
        h-[fit-content]
        backdrop-blur-md
        relative
        after:rounded-3xl
        after:w-4/5
        after:h-4/5
        after:hidden
        after:lg:block
        after:absolute
        after:z-10
        after:-left-[7%]
        after:-bottom-[7%]
        after:bg-sev-dark-7
        dark:after:bg-sev-white-10
        after:blur-2xl
        after:z-[-1]
        m-[2%]
        min-h-[50vh]
        glass
      ">
      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-4
          h-full
          relative
          z-20
        ">
        {works?.map((work) => (
          <WorkItem
            key={work.id}
            work={work}/>
        ))}
      </div>
    </div>
  );
};

export default WorkList;
