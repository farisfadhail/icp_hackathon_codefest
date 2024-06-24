const NavLink = ({ link = "", text = "" }) => {
  return (
    <li>
      <a href={link} className="px-6 py-1 text-lg">
        {text}
      </a>
    </li>
  );
};

export default NavLink;
