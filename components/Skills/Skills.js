/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS, getSkillName } from "../../constants";

const SkillItem = ({ skill }) => {
  const name = getSkillName(skill);

  return (
    <div
      className="group relative flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 hover:bg-white/[0.08] hover:scale-110 link"
      title={name}
    >
      <Image
        src={`/skills/${skill}.svg`}
        alt={name}
        width={50}
        height={50}
        className="object-contain"
      />
      {/* Tooltip under icon */}
      <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform -translate-y-1 group-hover:translate-y-0 z-30 whitespace-nowrap flex flex-col items-center">
        <div className="w-2 h-2 bg-gray-900/95 border-l border-t border-gray-700/60 transform rotate-45 -mb-1 z-10" />
        <div className="bg-gray-900/95 text-white text-xs font-semibold px-2.5 py-1 rounded-md border border-gray-700/60 shadow-xl backdrop-blur-md">
          {name}
        </div>
      </div>
    </div>
  );
};

const SkillGroup = ({ title, skills }) => (
  <div className="mt-10">
    <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
      {title}
    </h3>
    <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
      {skills.map((skill) => (
        <SkillItem key={skill} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS.find((el) => el.ref === "skills").ref}
      aria-label="Skills"
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h2 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h2>
            <p className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              I like to take responsibility to craft data insights
              using modern data architecture.{" "}
            </p>
          </div>

          <SkillGroup title="LANGUAGES AND TOOLS" skills={SKILLS.languagesAndTools} />
          <SkillGroup title="BIG DATA TECHNOLOGIES" skills={SKILLS.bigDataTechnologies} />
          <SkillGroup title="DATA VISUALIZATIONS" skills={SKILLS.dataVisualizations} />

          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6 staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                DATABASES & STORAGE
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.databases.map((skill) => (
                  <SkillItem key={skill} skill={skill} />
                ))}
              </div>
            </div>
            <div className="staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                Other
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.other.map((skill) => (
                  <SkillItem key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
