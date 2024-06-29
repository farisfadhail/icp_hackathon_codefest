import React, { useState } from "react";
import AuthLayout from "../../Layouts/AuthLayout";
import InputText from "../../Components/atoms/InputText";
import PrimaryButton from "../../Components/atoms/PrimaryButton";
import Title from "../../Components/atoms/Title";
import { icp_hackathon_codefest_backend } from "../../../../declarations/icp_hackathon_codefest_backend";
import { useAuth } from "../../Hooks/AuthProvider";

const CompanyCreate = () => {
	const [company, setCompany] = useState();
	const { session } = useAuth();

	function registerCompany(event) {
		event.preventDefault();
		const name = event.target.elements.name.value;
		const city = event.target.elements.city.value;
		const nation = event.target.elements.nation.value;
		const description = event.target.elements.description.value;
		const token_name = event.target.elements.token_name.value;
		const token_symbol = event.target.elements.token_symbol.value;
		const token_supply = event.target.elements.token_supply.value;
		session.createCompany({ name: name, city: city, nation: nation, description: description, name: token_name, ticker: token_symbol, suply: token_supply }).then((company) => {
			if (company.err) {
				setCompany(company.err);
			} else {
				setCompany("Company registered successfully!");
			}
		});
		return false;
	}

	return (
		<AuthLayout>
			<article className="min-h-screen">
				<Title>
					Create <span className="text-yellow-500">Company</span>
				</Title>
				<div className="p-6 rounded-md bg-indigo-900 bg-opacity-60 border-2 border-indigo-700 space-y-6 w-4/5 mx-auto my-12">
					<p className="text-white text-center font-semibold text-xl">Fill Up Your Company Profile</p>
					<form className="flex flex-col space-y-6" onSubmit={registerCompany}>
						<InputText id="name" name="name" placeholder="Name" />
						<InputText id="city" name="city" placeholder="City" />
						<InputText id="nation" name="nation" placeholder="Nation" />
						<InputText id="description" name="description" placeholder="Description" />
						<InputText id="token_name" name="token_name" placeholder="Token Name" />
						<InputText id="token_symbol" name="token_symbol" placeholder="Token Symbol" />
						<InputText id="token_supply" name="token_supply" placeholder="Token Supply" />
						<PrimaryButton type="submit" text="SAVE" />
					</form>
				</div>
			</article>
		</AuthLayout>
	);
};

export default CompanyCreate;
