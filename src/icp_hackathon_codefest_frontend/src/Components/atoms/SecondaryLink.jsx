import { Link } from "react-router-dom";

const SecondaryLink = ({ link = "", text = "" }) => {
  return (
    <Link to={link} className="py-1.5 px-3 rounded-md bg-indigo-950 text-white font-medium hover:bg-indigo-900 uppercase">
      {text}
    </Link>
  );
};

export default SecondaryLink;
