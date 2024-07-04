import PrimaryButton from "../../Components/atoms/PrimaryButton";
import Title from "../../Components/atoms/Title";
import CompanyShortInfo from "../../Components/molecules/company/CompanyShortInfo";
import AuthLayout from "../../Layouts/AuthLayout";
import companies from "../../Data/companies.json";

const CompanyUser = () => {
	return (
		<AuthLayout>
			<article className="min-h-screen mb-12">
				<Title>
					Your <span className="text-yellow-500">Companies</span>
				</Title>
				<div className="my-12 grid grid-cols-3">
					{companies.map((company, index) => (
						<div key={index} className="relative">
							<img src="/assets/building-asset.svg" className="w-72 mx-auto absolute top-20 inset-x-0 -z-[1]" />
							{/* Company Info Value Here */}
							<CompanyShortInfo id={company.id} name={company.name} />
						</div>
					))}
				</div>
			</article>
		</AuthLayout>
	);
};

export default CompanyUser;
