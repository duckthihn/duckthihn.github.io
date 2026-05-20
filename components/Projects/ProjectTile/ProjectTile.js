import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";
import { PROJECT_IMAGES } from "../images";

const tiltOptions = {
  max: 3,
  speed: 400,
  glare: true,
  "max-glare": 0.08,
  gyroscope: false,
};

const ProjectTile = ({ project }) => {
  const projectCard = useRef(null);

  const { name, imageKey, description, gradient, url, tech } = project;
  const image = PROJECT_IMAGES[imageKey];

  useEffect(() => {
    const node = projectCard.current;
    VanillaTilt.init(node, tiltOptions);
    return () => node?.vanillaTilt?.destroy();
  }, []);

  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      ref={projectCard}
      className={`${styles.projectTile} link`}
      style={{
        "--glow-color": `${gradient[0]}44`,
      }}
    >
      {/* Image showcase */}
      <div className={styles.imageContainer}>
        <div className={styles.imageAspect}>
          <Image
            src={image}
            alt={name}
            fill
            className={styles.projectImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Content */}
      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <div>
            <h3 className={styles.projectName}>{name}</h3>
            <div
              className={styles.accentLine}
              style={{
                background: `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]})`,
              }}
            />
          </div>
          {url && (
            <div className={styles.projectArrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          )}
        </div>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.techStack}>
          {tech.map((el) => (
            <span className={styles.techBadge} key={el}>
              <Image
                src={`/projects/tech/${el}.svg`}
                alt={el}
                height={12}
                width={12}
              />
              {el.replace(/-/g, " ")}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectTile;
