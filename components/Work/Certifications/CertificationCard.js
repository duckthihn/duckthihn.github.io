import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { cn } from "utils/cn";

const certificationTiltOptions = {
  max: 10,
  speed: 450,
  glare: true,
  "max-glare": 0.15,
  gyroscope: false,
  scale: 1.02,
};

const CertificationCard = ({ certification }) => {
  const { name, issuer, image, imageAlt } = certification;
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
        "certification-card group relative flex flex-col justify-between rounded-2xl border border-purple/20 bg-[#0f1623] p-4 transition-all duration-300 hover:border-purple/50 hover:shadow-xl hover:shadow-purple/20 [transform-style:preserve-3d]"
      )}
    >
      <div className="relative flex h-48 sm:h-52 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-5 shadow-sm">
        {!hasError ? (
          <>
            {isLoading && (
              <div className="absolute inset-0 animate-pulse bg-gray-light-1 rounded-xl" />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={imageAlt || name}
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onLoad={() => setIsLoading(false)}
              onError={() => setHasError(true)}
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-1 text-center p-2">
            <span className="text-base font-bold text-gray-dark-1">
              {name}
            </span>
            <span className="text-xs text-gray-light-4">
              Add image to public/certifications/
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col px-1 pb-1">
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight text-left">
          {name}
        </h3>
        {issuer && (
          <div className="mt-2.5 flex items-center">
            <span className="inline-flex items-center rounded-full bg-[#20183b] border border-purple/30 px-3.5 py-1 text-xs font-semibold text-[#c084fc] shadow-sm">
              {issuer}
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

export default CertificationCard;
