import PrimaryButton from "../../Components/atoms/PrimaryButton";
import PrimaryLink from "../../Components/atoms/PrimaryLink";
import SecondaryButton from "../../Components/atoms/SecondaryButton";
import Title from "../../Components/atoms/Title";
import AuthLayout from "../../Layouts/AuthLayout";
import DataTable from "react-data-table-component";

const columns = [
	{
		name: "Title",
		selector: (row) => row.title,
		sortable: true,
	},
	{
		name: "Token Name",
		selector: (row) => row.token_name,
		sortable: true,
	},
	{
		name: "Aksi",
		cell: (row) => <PrimaryLink link={`/company/${row.id}`} text="Detail" />,
		width: "11rem",
	},
];

const data = [
	{
		id: 1,
		title: "Beetlejuice",
		token_name: "BTJ",
	},
	{
		id: 2,
		title: "Ghostbusters",
		token_name: "GHB",
	},
];

const customStyles = {
	rows: {
		style: {
			backgroundColor: "#312e81",
			color: "white",
			fontWeight: "500",
		},
	},
	headCells: {
		style: {
			backgroundColor: "#312e81",
			backgroundOpacity: "80%",
			color: "white",
			fontSize: "1.2rem",
			fontWeight: "600",
		},
	},
	cells: {
		style: {
			paddingLeft: "30px",
		},
	},
};

const CompanyIndex = () => {
	return (
		<AuthLayout>
			<article className="min-h-screen">
				<Title>
					All <span className="text-yellow-500">Companies</span>
				</Title>
				<div className="my-12 space-y-4">
					<div className="flex justify-end gap-4">
						<PrimaryLink link="/company/create" text="Add Company" />
						<PrimaryLink link="/company/user" text="Your Company" />
					</div>
					<div className="rounded-xl border-2 border-indigo-700">
						<DataTable columns={columns} data={data} customStyles={customStyles} />
					</div>
				</div>
			</article>
		</AuthLayout>
	);
};

export default CompanyIndex;
