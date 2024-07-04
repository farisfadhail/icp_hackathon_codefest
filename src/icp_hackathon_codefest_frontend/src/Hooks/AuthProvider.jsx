import { AuthClient } from "@dfinity/auth-client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { canisterId, createActor } from "../../../declarations/icp_hackathon_codefest_backend";

const AuthContext = createContext();

export const getIdentityProvider = () => {
	let idpProvider;
	// Safeguard against server rendering
	if (typeof window !== "undefined") {
		const isLocal = process.env.DFX_NETWORK !== "ic";
		// Safari does not support localhost subdomains
		const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		if (isLocal && isSafari) {
			idpProvider = `http://localhost:4943/?canisterId=${process.env.CANISTER_ID_INTERNET_IDENTITY}`;
		} else if (isLocal) {
			idpProvider = `http://${process.env.CANISTER_ID_INTERNET_IDENTITY}.localhost:4943/#authorize`;
		}
	}
	return idpProvider;
};

export const defaultOptions = {
	/**
	 *  @type {import("@dfinity/auth-client").AuthClientCreateOptions}
	 */
	createOptions: {
		idleOptions: {
			// Set to true if you do not want idle functionality
			disableIdle: true,
		},
	},
	/**
	 * @type {import("@dfinity/auth-client").AuthClientLoginOptions}
	 */
	loginOptions: {
		identityProvider: getIdentityProvider(),
	},
};

/**
 *
 * @param options - Options for the AuthClient
 * @param {AuthClientCreateOptions} options.createOptions - Options for the AuthClient.create() method
 * @param {AuthClientLoginOptions} options.loginOptions - Options for the AuthClient.login() method
 * @returns
 */
export const useAuthClient = (options = defaultOptions) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [authClient, setAuthClient] = useState(null);
	const [identity, setIdentity] = useState(null);
	const [principal, setPrincipal] = useState(null);
	const [actor, setActor] = useState(null);

	useEffect(() => {
		// Initialize AuthClient
		AuthClient.create(options.createOptions).then(async (client) => {
			updateClient(client);
		});
	}, []);

	const login = () => {
		authClient.login({
			...options.loginOptions,
			onSuccess: () => {
				updateClient(authClient);
			},
		});
	};

	async function updateClient(client) {
		const isAuthenticated = await client.isAuthenticated();
		setIsAuthenticated(isAuthenticated);

		const identity = client.getIdentity();
		setIdentity(identity);

		const principal = identity.getPrincipal();
		setPrincipal(principal);

		setAuthClient(client);

		const actor = createActor(canisterId, {
			agentOptions: {
				identity,
			},
		});

		setActor(actor);
	}

	function register(first_name, last_name, email) {
		const actorRegis = createActor(canisterId);

		const regist = actorRegis.register({ first_name, last_name, email });

		return regist;
	}

	function createCompany(name, city, nation, description, token_name, token_symbol, token_supply) {
		const actorCompany = createActor(canisterId);

		const comp = actorCompany.createCompany({ name, city, nation, description }, { token_name, token_symbol, token_supply });

		return comp;
	}

	async function logout() {
		await authClient?.logout();
		await updateClient(authClient);
	}

	return {
		isAuthenticated,
		login,
		logout,
		authClient,
		identity,
		principal,
		actor,
		register,
		createCompany,
	};
};

/**
 * @type {React.FC}
 */
export const AuthProvider = ({ children }) => {
	const auth = useAuthClient();

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
