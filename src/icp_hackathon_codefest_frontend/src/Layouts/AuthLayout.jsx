import Sidebar from "../Components/molecules/Sidebar";
import AuthNavbar from "../Components/molecules/AuthNavbar";
import { Navigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
	const isAuthenticated = localStorage.getItem("isAuthenticated");

	if (isAuthenticated == false) {
		return (window.location.href = "/");
	}

	return (
		<>
			<Sidebar />
			<AuthNavbar />
			<section className="pl-72">
				<div className="p-6">{children}</div>
			</section>
		</>
	);
};

export default AuthLayout;
