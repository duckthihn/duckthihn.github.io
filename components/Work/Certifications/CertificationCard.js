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
        "certification-card flex min-h-[14rem] items-center justify-center rounded-2xl border border-gray-dark-1 bg-gray-dark-3 p-6 transition-colors hover:border-gray-dark-1/80 sm:min-h-[16rem] sm:p-8 [transform-style:preserve-3d]"
      )}
    >
      {!hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={imageAlt}
          className="max-h-44 w-full object-contain sm:max-h-52"
          loading="lazy"
          onError={() => setHasError(true)}
        />
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
