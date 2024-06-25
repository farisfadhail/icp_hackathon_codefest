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
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Aksi",
    cell: (row) => <PrimaryButton text="Detail" />,
    width: "11rem",
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
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

const CompanyUser = () => {
  return (
    <AuthLayout>
      <article className="min-h-screen mb-12">
        <div className="relative">
          <Title>
            Company <span className="text-yellow-500">Detail</span>
          </Title>
          <img src="/assets/building-asset.svg" className="w-72 mx-auto absolute top-20 inset-x-0 -z-[1]" />
          <div className="rounded-md p-6 bg-indigo-900 w-3/5 mx-auto space-y-6 mt-60 border-2 border-indigo-700">
            <div className="text-center">
              <p className="text-yellow-500 font-semibold text-2xl">Company Name</p>
              <p className="text-4xl text-white">Galaxy Store</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 font-semibold text-2xl">Company City</p>
              <p className="text-4xl text-white">Galaxy Store</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 font-semibold text-2xl">Company Nation</p>
              <p className="text-4xl text-white">Galaxy Store</p>
            </div>
          </div>
        </div>
        <div className="my-12">
          <p className="text-yellow-500 font-semibold text-3xl text-center">About Company</p>
          <p className="text-center text-white text-xl w-4/5 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fugit, veniam fugiat ex commodi a odit deleniti possimus quasi dolore praesentium ducimus rerum, ratione maxime molestiae repudiandae tenetur dolorem totam delectus
            quam natus exercitationem. Debitis delectus commodi cum labore illo.
          </p>
        </div>
      </article>
      <article className="h-screen">
        <Title>
          All <span className="text-yellow-500">Listing</span>
        </Title>
        <div className="my-12 space-y-4">
          <div className="flex justify-end">
            <PrimaryLink link="" text="Add Listing" />
          </div>
          <div className="rounded-xl border-2 border-indigo-700">
            <DataTable columns={columns} data={data} customStyles={customStyles} />
          </div>
        </div>
      </article>
    </AuthLayout>
  );
};

export default CompanyUser;
