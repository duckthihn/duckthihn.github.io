import CertificationCard from "./CertificationCard";

const Certifications = ({ certifications }) => {
  return (
    <div id="certifications" className="mt-24 lg:mt-32">
      <div className="flex flex-col staggered-reveal">
        <h2 className="text-5xl font-bold tracking-tight text-white w-fit sm:text-6xl">
          My <span className="text-gradient">certifications</span>
        </h2>
        <p className="mt-3 text-lg font-medium text-gray-light-2 sm:text-[1.35rem]">
          Professional certifications that validate my expertise
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {certifications.map((certification) => (
          <CertificationCard
            key={certification.name}
            certification={certification}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
