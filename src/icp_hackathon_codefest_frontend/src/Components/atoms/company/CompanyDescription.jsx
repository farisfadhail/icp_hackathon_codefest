import React from "react";

const CompanyDescription = ({ description = "" }) => {
  return (
    <div className="my-12">
      <p className="text-yellow-500 font-semibold text-3xl text-center">About Company</p>
      <p className="text-center text-white text-xl w-4/5 mx-auto">{description}</p>
    </div>
  );
};

export default CompanyDescription;
