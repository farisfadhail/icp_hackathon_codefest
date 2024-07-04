import React, { useState } from "react";
import AuthLayout from "../../Layouts/AuthLayout";
import Title from "../../Components/atoms/Title";
import TokenDropdown from "../../Components/molecules/token/TokenDropdown";
import tokens from "../../Data/tokens.json";
import PrimaryButton from "../../Components/atoms/PrimaryButton";

const TokenSwap = () => {
  const [currentToken, setCurrentToken] = useState("");
  const [targetToken, setTargetToken] = useState("");

  const handleCurrentTokenSelect = (tokenName) => {
    setCurrentToken(tokenName);
  };

  const handleTargetTokenSelect = (tokenName) => {
    setTargetToken(tokenName);
  };

  return (
    <AuthLayout>
      <article className="min-h-screen">
        <Title>
          Swap Your <span className="text-yellow-500">Token</span>
        </Title>
        <div className="my-12 bg-indigo-900 bg-opacity-80 rounded-md p-6 w-full mx-auto border-2 border-indigo-700 space-y-6">
          <div className="flex justify-between items-center">
            <div className="space-y-6">
              <TokenDropdown datas={tokens} filteredValue="token" position={"left"} onSelect={handleCurrentTokenSelect} />
              <input type="number" placeholder="Enter Amount" className="text-left w-full text-2xl bg-transparent text-white font-bold border-b border-b-indigo-500" />
            </div>
            <div className="p-1.5 rounded-md bg-indigo-500 w-fit h-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-white" viewBox="0 0 12 12">
                <path fill="currentColor" d="M1.5 6a.5.5 0 0 1 .5-.5h6.793L6.146 2.854a.5.5 0 1 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L8.793 6.5H2a.5.5 0 0 1-.5-.5" />
              </svg>
            </div>
            <div className="flex flex-col justify-end items-end space-y-6">
              <TokenDropdown datas={tokens} filteredValue="token" position={"right"} onSelect={handleTargetTokenSelect} />
              <input type="number" placeholder="Enter Amount" className="text-right w-full text-2xl bg-transparent text-white font-bold border-b border-b-indigo-500" />
            </div>
          </div>
          {currentToken && targetToken && (
            <p className="text-center text-white text-lg">
              1 {currentToken} = 0.123 {targetToken}
            </p>
          )}
          <div className="w-fit mx-auto">
            <PrimaryButton text="Swap" />
          </div>
        </div>
      </article>
    </AuthLayout>
  );
};

export default TokenSwap;
