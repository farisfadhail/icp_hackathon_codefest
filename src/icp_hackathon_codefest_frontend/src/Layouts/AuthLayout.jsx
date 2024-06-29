import Sidebar from "../Components/molecules/Sidebar";
import AuthNavbar from "../Components/molecules/AuthNavbar";
import { useAuth } from "../Hooks/AuthProvider";
import { Navigate } from "react-router-dom";


const AuthLayout = ({ children }) => {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated == false) {
		return <Navigate to={"/"}/>;
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
