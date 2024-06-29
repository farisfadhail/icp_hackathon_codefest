import NavLink from "../atoms/NavLink";
import AppLogo from "../atoms/AppLogo";
import PrimaryButton from "../atoms/PrimaryButton";
import PrimaryLink from "../atoms/PrimaryLink";
import { useAuth } from "../../Hooks/AuthProvider";
import { useState } from "react";

function Navbar() {
	const { isAuthenticated, login, logout, whoamiActor } = useAuth();

	const [result, setResult] = useState("");

	const whoAmI = async () => {
		const whoami = await whoamiActor.whoami();
		setResult(whoami);
	};

	return (
		<nav className="h-24 px-12 flex items-center justify-between">
			<div className="flex items-center gap-12">
				<AppLogo />
				<div className="w-0.5 h-12 bg-white"></div>
				<ul className="flex items-center gap-8 text-white font-medium">
					<NavLink link="#home" text="Home" />
					<NavLink link="#about" text="About Us" />
					<NavLink link="#work" text="How It Work" />
				</ul>
			</div>
			<div className="flex items-center gap-4">
				{/* <SecondaryLink link="/register" text="REGISTER" /> */}
				{isAuthenticated ? (
					<>
						<h2>user : {result}</h2>
						<PrimaryButton text="GET PRINCIPAL" onClick={whoAmI} />
						<PrimaryButton text="LOGOUT" onClick={logout} />
						<PrimaryLink link="/company" text="Dashboard" />
					</>
				) : (
					<>
						<PrimaryButton text="LOGIN" onClick={login} />
					</>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
