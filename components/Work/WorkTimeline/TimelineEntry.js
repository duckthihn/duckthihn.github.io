import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import LocationPill from "./LocationPill";
import { cn } from "utils/cn";

const imageTiltOptions = {
  max: 8,
  speed: 450,
  glare: true,
  "max-glare": 0.18,
  gyroscope: false,
  scale: 1.02,
};

const TimelineDot = () => (
  <div
    className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-purple bg-black lg:mx-auto"
    aria-hidden="true"
  >
    <span className="h-2 w-2 rounded-full bg-purple" />
  </div>
);

const ImageCard = ({ image, imageAlt, company, role, className }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const tiltRef = useRef(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (!node) return;
    VanillaTilt.init(node, imageTiltOptions);
    return () => node?.vanillaTilt?.destroy();
  }, []);

  return (
    <div
      ref={tiltRef}
      className={cn(
        "group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-dark-2 to-gray-dark-4 border border-purple/20 transition-all duration-300 hover:border-purple/40 hover:shadow-lg hover:shadow-purple/20 [transform-style:preserve-3d]",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-purple/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 before:z-10 group-hover:before:opacity-100",
        className
      )}
    >
      {!hasError ? (
        <>
          {isLoading && (
            <div className="absolute inset-0 animate-pulse bg-gray-dark-3 rounded-2xl" />
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105 relative z-20"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => setHasError(true)}
          />
        </>
      ) : (
        <div className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-dark-3 to-gray-dark-5 p-6 text-center">
          <span className="text-2xl font-semibold text-white">{company}</span>
          <span className="text-sm text-gray-light-3">{role}</span>
        </div>
      )}
    </div>
  );
};

const TextBlock = ({ experience, alignRight, className }) => {
  const { date, role, company, description, location } = experience;

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        alignRight ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left",
        className
      )}
    >
      <p className="text-sm font-medium text-purple">{date}</p>
      <h3 className="text-3xl font-semibold text-white md:text-4xl">
        {role} -{" "}
        <span className="underline decoration-white/80 underline-offset-4">
          {company}
        </span>
      </h3>
      <p className="max-w-md text-base text-gray-light-3 md:text-lg">
        {description}
      </p>
      <LocationPill location={location} />
    </div>
  );
};

const TimelineEntry = ({ experience, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <article
      className={cn(
        "timeline-entry relative pl-8 lg:pl-0",
        !isLast && "pb-16 lg:pb-28"
      )}
    >
      <div className="absolute left-0 top-2 flex flex-col items-center lg:left-1/2 lg:-translate-x-1/2">
        <TimelineDot />
        {!isLast && (
          <span
            className="mt-2 w-px flex-1 min-h-[calc(100%+4rem)] bg-purple/30 lg:min-h-[calc(100%+6rem)]"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_2rem_1fr] lg:items-center lg:gap-x-10">
        {isEven ? (
          <>
            <TextBlock
              experience={experience}
              alignRight
              className="order-2 lg:order-none lg:col-start-1"
            />
            <span className="hidden lg:block lg:col-start-2" aria-hidden="true" />
            <ImageCard
              image={experience.image}
              imageAlt={experience.imageAlt}
              company={experience.company}
              role={experience.role}
              className="order-1 lg:order-none lg:col-start-3"
            />
          </>
        ) : (
          <>
            <ImageCard
              image={experience.image}
              imageAlt={experience.imageAlt}
              company={experience.company}
              role={experience.role}
              className="order-1 lg:order-none lg:col-start-1"
            />
            <span className="hidden lg:block lg:col-start-2" aria-hidden="true" />
            <TextBlock
              experience={experience}
              alignRight={false}
              className="order-2 lg:order-none lg:col-start-3"
            />
          </>
        )}
      </div>
    </article>
  );
};

export default TimelineEntry;
