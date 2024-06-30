import Sidebar from "../Components/molecules/Sidebar";
import AuthNavbar from "../Components/molecules/AuthNavbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthProvider";

const AuthLayout = ({ children }) => {
	const { isAuthenticated } = useAuth();
	const navigate = useNavigate();

	if (isAuthenticated == false) {
		return navigate("/");
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
