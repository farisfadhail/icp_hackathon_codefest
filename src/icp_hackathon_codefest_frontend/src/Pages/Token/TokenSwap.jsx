import React from "react";
import AuthLayout from "../../Layouts/AuthLayout";
import Title from "../../Components/atoms/Title";

const TokenSwap = () => {
  return (
    <AuthLayout>
      <article className="min-h-screen">
        <Title>
          Swap Your <span className="text-yellow-500">Token</span>
        </Title>
        <div className="my-12 bg-indigo-900 bg-opacity-80 rounded-md p-6 w-3/5 mx-auto border-2 border-indigo-700"></div>
      </article>
    </AuthLayout>
  );
};

export default TokenSwap;
