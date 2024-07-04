import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ link = "", children, text = "" }) => {
  return (
    <li className="w-full">
      <Link to={link} className="flex gap-3 items-center text-white font-semibold text-xl py-1.5 px-6 border-2 border-indigo-700 hover:bg-indigo-700 rounded-full w-full">
        {children}
        {text}
      </Link>
    </li>
  );
};

export default SidebarLink;
