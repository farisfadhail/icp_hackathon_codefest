import NavLink from "../atoms/NavLink";
import AppLogo from "../atoms/AppLogo";
import SecondaryLink from "../atoms/SecondaryLink";
import PrimaryButton from "../atoms/PrimaryButton";
import { useState } from "react";
import { icp_hackathon_codefest_backend, createActor } from "../../../../declarations/icp_hackathon_codefest_backend";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";
import { useAuth } from "../../Hooks/AuthProvider";
import PrimaryLink from "../atoms/PrimaryLink";

function Navbar() {
	const { isAuthenticated, logout, login, createSession, isRegistered, setIsRegistered } = useAuth();

	const [getPrincipal, setPrincipal] = useState("");

	const [actor, setActor] = useState(icp_hackathon_codefest_backend);

	console.log(process.env.CANISTER_ID_INTERNET_IDENTITY);
	console.log(process.env.CANISTER_ID_ICP_HACKATHON_CODEFEST_BACKEND);
	console.log("is registered : ", isRegistered);

	async function loginEvent(event) {
		event.preventDefault();
		let authClient = await AuthClient.create();
		await new Promise((resolve, reject) => {
			authClient.login({
				identityProvider: process.env.DFX_NETWORK === "ic" ? "https://identity.ic0.app" : `http://${process.env.CANISTER_ID_INTERNET_IDENTITY}.localhost:4943/#authorize`,
				onSuccess: () => {
					login(authClient);
					resolve;
				},
				onError: reject,
			});
		});
		const identity = authClient.getIdentity();
		console.log("identity :", identity);
		const agent = new HttpAgent({ identity });
		console.log("agent :", agent);
		setActor(
			createActor(process.env.CANISTER_ID_ICP_HACKATHON_CODEFEST_BACKEND, {
				agent,
			})
		);

		createSession(actor);
		setIsRegistered(true);
		// const result = await actor
		// 	.makeSomeCallLikeHelloWorldOrCRUDOrMintOrSendBtcEtc()
		// 	// Update the ui accordingly...
		// 	.updateUi(result);

		return false;
	}

	async function logoutEvent(event) {
		event.preventDefault();

		logout();

		return false;
	}

	console.log(actor);

	async function whoAmI(event) {
		event.preventDefault();
		const principal = await actor.whoami();

		setPrincipal(principal.toString());
		console.log("from principal :", principal.toString());
		console.log(actor);
		return false;
	}

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
						{/* <h2>user : {getPrincipal}</h2>
						<form>
							<PrimaryButton type="submit" text="GET PRINCIPAL" onClick={whoAmI} />
						</form> */}
						<form>
							<PrimaryButton type="submit" text="LOGOUT" onClick={logoutEvent} />
						</form>
						<PrimaryLink link="/company" text="Dashboard" />
					</>
				) : (
					<>
						<form>
							<PrimaryButton type="submit" text="LOGIN" onClick={loginEvent} />
						</form>
					</>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
