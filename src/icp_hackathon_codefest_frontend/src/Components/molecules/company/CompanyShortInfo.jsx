import React from "react";
import PrimaryLink from "../../atoms/PrimaryLink";

const CompanyShortInfo = ({ id, name = "" }) => {
  return (
    <div className="rounded-md p-6 bg-indigo-900 w-4/5 mx-auto space-y-6 mt-60 border-2 border-indigo-700">
      <div className="text-center">
        <p className="text-yellow-500 font-semibold text-xl">Company Name</p>
        <p className="text-2xl text-white">{name}</p>
      </div>
      <div className="w-fit mx-auto">
        <PrimaryLink link={`/company/user/${id}`} text="Detail" />
      </div>
    </div>
  );
};

export default CompanyShortInfo;
