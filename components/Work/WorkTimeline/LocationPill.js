const LocationPin = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="shrink-0 text-purple"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      fill="currentColor"
    />
  </svg>
);

const LocationPill = ({ location }) => {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple/30 bg-gray-dark-4 px-3.5 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-medium text-gray-light-1 shadow-sm transition-all duration-300 hover:border-purple/60">
      <LocationPin />
      {location}
    </span>
  );
};

export default LocationPill;

