import NavLink from "../atoms/NavLink";
import AppLogo from "../atoms/AppLogo";
import SecondaryLink from "../atoms/SecondaryLink";
import PrimaryButton from "../atoms/PrimaryButton";
import { useState } from "react";
import { icp_hackathon_codefest_backend, createActor } from "../../../../declarations/icp_hackathon_codefest_backend";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";
import PrimaryLink from "../atoms/PrimaryLink";

function Navbar() {
	// const isAuthenticated = localStorage.getItem("isAuthenticated");

	const [isAuthenticated, setIsAuthenticated] = useState("");
	const [getPrincipal, setPrincipal] = useState("");

	const [actor, setActor] = useState(icp_hackathon_codefest_backend);

	console.log(process.env.CANISTER_ID_INTERNET_IDENTITY);
	console.log(process.env.CANISTER_ID_ICP_HACKATHON_CODEFEST_BACKEND);

	async function loginEvent(event) {
		event.preventDefault();
		let authClient = await AuthClient.create();
		await new Promise((resolve) => {
			authClient.login({
				identityProvider: process.env.DFX_NETWORK === "ic" ? "https://identity.ic0.app" : `http://${process.env.CANISTER_ID_INTERNET_IDENTITY}.localhost:4943/#authorize`,
				onSuccess: resolve,
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

		localStorage.setItem("session", actor);
		localStorage.setItem("authClient", authClient);
		localStorage.setItem("identity", authClient.getIdentity());
		localStorage.setItem("principal", authClient.getIdentity().getPrincipal());
		localStorage.setItem("isAuthenticated", authClient.isAuthenticated());
		setIsAuthenticated(true);

		if (actor.cekUser()) {
			window.location.href = "/company";
		} else {
			window.location.href = "/register";
		}

		// const result = await actor.makeSomeCallLikeHelloWorldOrCRUDOrMintOrSendBtcEtc()
		// 	// Update the ui accordingly...
		// 	.updateUi(result);
		return false;
	}

	async function logoutEvent(event) {
		event.preventDefault();

		// const authClient = localStorage.getItem("authClient");

		// authClient.logout();

		localStorage.removeItem("session");
		localStorage.removeItem("authClient");
		localStorage.removeItem("identity");
		localStorage.removeItem("principal");
		localStorage.setItem("isAuthenticated", false);
		localStorage.setItem("isRegistered", false);
		setIsAuthenticated(false);

		return false;
	}

	console.log(actor);

	async function whoAmI(event) {
		event.preventDefault();
		const actor = localStorage.getItem("session");

		setPrincipal(localStorage.getItem("principal"));
		console.log("from principal :", localStorage.getItem("principal"));
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
						<h2>user : {getPrincipal}</h2>
						<form>
							<PrimaryButton text="GET PRINCIPAL" onClick={whoAmI} />
						</form>
						<form>
							<PrimaryButton text="LOGOUT" onClick={logoutEvent} />
						</form>
						<PrimaryLink link="/company" text="Dashboard" />
					</>
				) : (
					<>
						<form>
							<PrimaryButton text="LOGIN" onClick={loginEvent} />
						</form>
					</>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
