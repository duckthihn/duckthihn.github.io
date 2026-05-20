import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { cn } from "utils/cn";

const certificationTiltOptions = {
  max: 10,
  speed: 450,
  glare: true,
  "max-glare": 0.15,
  gyroscope: false,
  scale: 1.03,
};

const CertificationCard = ({ certification }) => {
  const { name, image, imageAlt } = certification;
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const tiltRef = useRef(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (!node) return;
    VanillaTilt.init(node, certificationTiltOptions);
    return () => node?.vanillaTilt?.destroy();
  }, []);

  return (
    <article
      ref={tiltRef}
      className={cn(
        "certification-card group relative flex min-h-[14rem] items-center justify-center rounded-2xl border border-purple/20 bg-gradient-to-br from-gray-dark-2 to-gray-dark-3 p-6 transition-all duration-300 hover:border-purple/40 hover:shadow-lg hover:shadow-purple/20 sm:min-h-[16rem] sm:p-8 [transform-style:preserve-3d]",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-purple/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100"
      )}
    >
      {!hasError ? (
        <>
          {isLoading && (
            <div className="absolute inset-0 animate-pulse bg-gray-dark-4 rounded-2xl" />
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="max-h-44 w-full object-contain sm:max-h-52 transition-transform duration-300 group-hover:scale-105 relative z-10"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => setHasError(true)}
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <span className="text-lg font-semibold text-white sm:text-xl">
            {name}
          </span>
          <span className="text-sm text-gray-light-3">
            Add image to public/certifications/
          </span>
        </div>
      )}
    </article>
  );
};

export default CertificationCard;
