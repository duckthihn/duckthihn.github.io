import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Certifications from "./Certifications/Certifications";
import WorkTimeline from "./WorkTimeline/WorkTimeline";
import { CERTIFICATIONS, MENULINKS, WORK_EXPERIENCES } from "../../constants";

const Work = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        )
        .from(
          sectionRef.current.querySelectorAll(".timeline-entry"),
          { opacity: 0, y: 40, duration: 0.6, stagger: 0.2 },
          "-=0.2"
        )
        .from(
          sectionRef.current.querySelectorAll(".certification-card"),
          { opacity: 0, y: 30, duration: 0.5, stagger: 0.15 },
          "-=0.1"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".work-wrapper"),
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
      id={MENULINKS.find((el) => el.ref === "work").ref}
      aria-label="Work Experience"
      className="w-full relative select-none xs:mt-10 sm:mt-12 mb-24 md:mb-32"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt="left pattern"
      />
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              WORK
            </p>
            <h2 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Experience
            </h2>
            <p className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              A quick recap of where I&apos;ve worked.{" "}
            </p>
          </div>
          <div className="staggered-reveal">
            <WorkTimeline experiences={WORK_EXPERIENCES} />
          </div>
          <Certifications certifications={CERTIFICATIONS} />
        </div>
      </div>
    </section>
  );
};

export default Work;
