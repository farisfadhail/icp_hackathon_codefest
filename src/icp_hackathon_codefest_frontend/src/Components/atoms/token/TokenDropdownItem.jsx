import React from "react";

const TokenDropdownItem = ({ tokenName = "", fullName = "", owned = "0", onClick }) => {
  return (
    <li onClick={onClick} className="flex items-center justify-between hover:bg-indigo-700 py-2 px-6">
      <div>
        <p className="font-semibold text-2xl">{tokenName}</p>
        <p className="font-thin line-clamp-1">{fullName}</p>
      </div>
      <p className="rounded-full bg-indigo-900 px-5 py-0.5 font-semibold text-lg">{owned}</p>
    </li>
  );
};

export default TokenDropdownItem;
