import React from "react";
import AuthLayout from "../../Layouts/AuthLayout";
import InputText from "../../Components/atoms/InputText";
import PrimaryButton from "../../Components/atoms/PrimaryButton";
import Title from "../../Components/atoms/Title";

const CompanyCreate = () => {
  return (
    <AuthLayout>
      <article className="min-h-screen">
        <Title>
          Create <span className="text-yellow-500">Company</span>
        </Title>
        <div className="p-6 rounded-md bg-indigo-900 bg-opacity-60 border-2 border-indigo-700 space-y-6 w-4/5 mx-auto my-12">
          <p className="text-white text-center font-semibold text-xl">Fill Up Your Company Profile</p>
          <form className="flex flex-col space-y-6">
            <InputText id="name" name="name" placeholder="Name" />
            <InputText id="city" name="city" placeholder="City" />
            <InputText id="nation" name="nation" placeholder="Nation" />
            <PrimaryButton type="submit" text="SAVE" />
          </form>
        </div>
      </article>
    </AuthLayout>
  );
};

export default CompanyCreate;
