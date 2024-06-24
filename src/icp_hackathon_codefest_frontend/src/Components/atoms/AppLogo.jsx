import { Link } from "react-router-dom";

const AppLogo = () => {
  return (
    <Link className="font-bold text-2xl font-rajdhani text-white flex items-center" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10" viewBox="0 0 256 256">
        <path
          fill="currentColor"
          d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 120L47.65 76L128 32l80.35 44Zm8 99.64v-85.81l80-43.78v85.76Z"
        />
      </svg>
      Join<span className="text-yellow-500">Vest</span>
    </Link>
  );
};

export default AppLogo;
