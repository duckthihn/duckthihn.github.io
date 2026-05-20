import { useEffect, useRef, useState } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";

const Projects = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(PROJECTS.map((p) => p.category || "Featured")),
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => (p.category || "Featured") === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      const revealTl = gsap.timeline({ defaults: { ease: "none" } });
      revealTl.from(
        sectionRef.current.querySelectorAll(".staggered-reveal"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0,
        animation: revealTl,
      });

      // Staggered card entrance
      const cards = sectionRef.current.querySelectorAll(".project-card");
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".projects-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isDesktop, activeCategory]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS.find((el) => el.ref === "projects").ref}
      aria-label="Projects"
      className="w-full relative select-none section-container py-12 md:py-16"
    >
      <div className="flex flex-col" ref={sectionTitleRef}>
        <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
          PROJECTS
        </p>
        <h2 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
          My Works
        </h2>
        <p className="text-[1.65rem] font-medium md:max-w-lg max-w-sm mt-2 staggered-reveal">
          What I do at 2AM on a Saturday.{" "}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mt-8 md:mt-10 flex flex-wrap gap-2 staggered-reveal">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-purple text-white"
                : "bg-gray-dark-3 text-gray-light-2 hover:bg-gray-dark-2"
            }`}
          >
            {category} ({category === "All" ? PROJECTS.length : PROJECTS.filter((p) => (p.category || "Featured") === category).length})
          </button>
        ))}
      </div>

      <div
        className="projects-grid mt-6 md:mt-8"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.5rem",
        }}
      >
        <style jsx>{`
          @media (min-width: 768px) {
            .projects-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
        `}</style>
        {filteredProjects.map((project) => (
          <div key={project.name} className="project-card">
            <ProjectTile project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
