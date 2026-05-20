import TimelineEntry from "./TimelineEntry";

const WorkTimeline = ({ experiences }) => {
  return (
    <div className="relative mt-16 lg:mt-20">
      <div
        className="pointer-events-none absolute left-[0.625rem] top-0 hidden h-full w-px bg-purple/30 lg:left-1/2 lg:block lg:-translate-x-1/2"
        aria-hidden="true"
      />
      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <TimelineEntry
            key={`${experience.company}-${experience.role}-${index}`}
            experience={experience}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkTimeline;
