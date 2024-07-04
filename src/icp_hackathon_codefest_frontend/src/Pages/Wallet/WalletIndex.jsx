import React from "react";
import AuthLayout from "../../Layouts/AuthLayout";
import Title from "../../Components/atoms/Title";
import DataTable from "react-data-table-component";
import PrimaryLink from "../../Components/atoms/PrimaryLink";

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
    cell: (row) => <PrimaryLink link="/token/swap" text="Detail" />,
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

const WalletIndex = () => {
  return (
    <AuthLayout>
      <article className="min-h-screen">
        <Title>
          Your <span className="text-yellow-500">Wallet</span>
        </Title>
        <div className="my-12 rounded-xl border-2 border-indigo-700">
          <DataTable columns={columns} data={data} customStyles={customStyles} />
        </div>
      </article>
    </AuthLayout>
  );
};

export default WalletIndex;
