import React from "react";
import { useState } from "react";
import TokenDropdownItem from "../../atoms/token/TokenDropdownItem";

const TokenDropdown = ({ datas, filteredValue, position, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedToken, setSelectedToken] = useState("");

  const handleDropdownClick = () => {
    setOpen(!open);
  };

  const handleSearchChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const handleItemSelect = (tokenName) => {
    setSelectedToken(tokenName);
    setOpen(!open);
    onSelect(tokenName);
  };

  const filteredData = datas.filter((data) => data.token?.toLowerCase().includes(searchFilter.toLowerCase()) || data.name?.toLowerCase().includes(searchFilter.toLowerCase()));

  return (
    <div className="relative">
      <button type="button" onClick={handleDropdownClick} className="w-52 bg-indigo-500 flex items-center justify-between py-2 px-6 rounded-md text-white">
        <p className="font-bold text-2xl">{selectedToken || "Select Token"}</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5" />
        </svg>
      </button>
      {open && (
        <div className={`w-80 bg-indigo-500 py-2 rounded-md absolute mt-2 ${position}-0`}>
          <form className="px-6 w-full mb-3">
            <input type="text" placeholder="Search Token Name" value={searchFilter} onChange={handleSearchChange} className="rounded-md px-4 py-1 w-full" />
          </form>
          <ul className="text-white">
            {filteredData.map((filtered) => {
              return <TokenDropdownItem tokenName={filtered.token} fullName={filtered.name} owned={filtered.own} onClick={() => handleItemSelect(filtered.token)} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TokenDropdown;
