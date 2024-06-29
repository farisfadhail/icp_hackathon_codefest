import { useState } from "react";
import { icp_hackathon_codefest_backend, createActor } from "declarations/icp_hackathon_codefest_backend";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";

function App() {
	const [user, setUser] = useState();
	const [getPrincipal, setPrincipal] = useState("");
	const [actor, setActor] = useState(icp_hackathon_codefest_backend);
	const [wallet, setWallet] = useState();  
	const [listing, setListing] = useState();
	const [company, setCompany] = useState();

	console.log(process.env.CANISTER_ID_INTERNET_IDENTITY);
	console.log(process.env.CANISTER_ID_ICP_HACKATHON_CODEFEST_BACKEND);

	function handleSubmit(event) {
		event.preventDefault();
		const first_name = event.target.elements.first_name.value;
		const last_name = event.target.elements.last_name.value;
		const email = event.target.elements.email.value;
		actor.register({ first_name: first_name, last_name: last_name, email: email }).then((user) => {
			if (user.err) {
				setUser(user.err);
			} else {
				setUser("User registered successfully!");
			}
		});
		return false;
	}

	function registerCompany(event) {
		event.preventDefault();
		const name = event.target.elements.name.value;
		const city = event.target.elements.city.value;
		const nation = event.target.elements.nation.value;
		const description = event.target.elements.description.value;
		const token_name = event.target.elements.token_name.value;
		const token_symbol = event.target.elements.token_symbol.value;
		const token_supply = event.target.elements.token_supply.value;
		actor.registerCompany({ name: name, city: city, nation: nation, description: description, name: token_name, ticker: token_symbol, suply: token_supply }).then((company) => {
			if (company.err) {
				setCompany(company.err);
			} else {
				setCompany("Company registered successfully!");
			}
		});
		return false;
	}

	async function getWallet(event) {
		event.preventDefault();
		const wallet = await actor.getWallet();
		setWallet(wallet);
		console.log("from wallet :", wallet);
		return false;
	}

	async function login(event) {
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
		// const result = await actor.makeSomeCallLikeHelloWorldOrCRUDOrMintOrSendBtcEtc()
		// 	// Update the ui accordingly...
		// 	.updateUi(result);
		return false;
	}

	async function whoAmI(event) {
		event.preventDefault();
		const principal = await actor.whoami();

		setPrincipal(principal.toString());
		console.log("from principal :", principal.toString());
		return false;
	}

	async function getListing(event) {
		event.preventDefault();
		const listing = await actor.getListing();
		setListing(listing);
		console.log("from listing :", listing);
		return false;
	}

	return (
		<main>
			<img src="/logo2.svg" alt="DFINITY logo" />
			<br />
			<br />
			<form action="#" onSubmit={handleSubmit}>
				<label htmlFor="name">pany name: &nbsp;</label>
				<input id="name" alt="name" type="text" />
				<label htmlFor="city">City company: &nbsp;</label>
				<input id="city" alt="city" type="text" />
				<label htmlFor="nation">Nation : &nbsp;</label>
				<input id="nation" alt="nation" type="text" />
				<label htmlFor="description">Deskripsi : &nbsp;</label>
				<input id="description" alt="description" type="text" />
				<label htmlFor="token_name">Token name : &nbsp;</label>
				<input id="token_name" alt="token_name" type="text" />
				<label htmlFor="token_symbol">Token symbol : &nbsp;</label>
				<input id="token_symbol" alt="token_symbol" type="text" />
				<label htmlFor="token_supply">Token supply : &nbsp;</label>
				<input id="token_supply" alt="token_supply" type="text" />
				
				<button type="submit">Submit</button>
			</form>
			<section id="user">{company}</section>
			<br />
			<form action="#" onSubmit={handleSubmit}>
				<label htmlFor="name">Enter your first name: &nbsp;</label>
				<input id="first_name" alt="first_name" type="text" />
				<label htmlFor="name">Enter your last name: &nbsp;</label>
				<input id="last_name" alt="last_name" type="text" />
				<label htmlFor="name">Enter your email: &nbsp;</label>
				<input id="email" alt="email" type="text" />
				<button type="submit">Submit</button>
			</form>
			<section id="user">{user}</section>
			<br />
			<form>
				<button onClick={login}>Login!</button>
			</form>
			<br />
			{/* Tombol e iki dipencet sekali ae, trus dienteni */}
			<form>
				<button id="whoAmI" onClick={whoAmI}>
					Who Am I
				</button>
			</form>
			<section>1. {getPrincipal}</section>
			<form>
				<button id="getWallet" onClick={getWallet}>
					get Wallet
				</button>
			</form>
			<pre>{JSON.stringify(wallet, null, 2)}</pre>
			<form>
				<button id="getListing" onClick={getListing}>
					get Wallet
				</button>
			</form>
			<pre>{JSON.stringify(listing, null, 2)}</pre>
		</main>
	);
}

export default App;
