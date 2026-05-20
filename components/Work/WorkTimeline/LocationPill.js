const LocationPin = () => (
  <svg
    width="14"
    height="14"
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
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-dark-1 bg-gray-dark-4 px-3 py-1.5 text-sm text-gray-light-2">
      <LocationPin />
      {location}
    </span>
  );
};

export default LocationPill;
