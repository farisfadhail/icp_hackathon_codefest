import React from "react";

const CompanyInfo = ({ name = "", city = "", nation = "" }) => {
  return (
    <div className="rounded-md p-6 bg-indigo-900 w-3/5 mx-auto space-y-6 mt-60 border-2 border-indigo-700">
      <div className="text-center">
        <p className="text-yellow-500 font-semibold text-2xl">Company Name</p>
        <p className="text-4xl text-white">{name}</p>
      </div>
      <div className="text-center">
        <p className="text-yellow-500 font-semibold text-2xl">Company City</p>
        <p className="text-4xl text-white">{city}</p>
      </div>
      <div className="text-center">
        <p className="text-yellow-500 font-semibold text-2xl">Company Nation</p>
        <p className="text-4xl text-white">{nation}</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
