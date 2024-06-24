import { Link } from "react-router-dom";

const PrimaryLink = ({ link = "", text = "" }) => {
  return (
    <Link to className="py-1.5 px-3 rounded-md bg-indigo-700 text-white font-medium hover:bg-indigo-600 uppercase">
      {text}
    </Link>
  );
};

export default PrimaryLink;
