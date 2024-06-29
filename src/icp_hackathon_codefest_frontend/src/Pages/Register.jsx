import AppLogo from "../Components/atoms/AppLogo";
import PrimaryButton from "../Components/atoms/PrimaryButton";
import SecondaryLink from "../Components/atoms/SecondaryLink";
import InputText from "../Components/atoms/InputText";
import { useState } from "react";

const Register = () => {
	const [user, setUser] = useState();
	const session = localStorage.getItem("session");

	function handleSubmit(event) {
		event.preventDefault();
		const first_name = event.target.elements.first_name.value;
		const last_name = event.target.elements.last_name.value;
		const email = event.target.elements.email.value;
		session.register({ first_name: first_name, last_name: last_name, email: email }).then((user) => {
			if (user.err) {
				setUser(user.err);
			} else {
				setUser("User registered successfully!");
				window.location.href = "/company";
			}
		});

		return false;
	}

	return (
		<section className="w-screen min-h-screen flex justify-center items-center">
			<div class="blob"></div>
			<div class="blob-2"></div>
			<div className="p-6 rounded-md bg-indigo-900 bg-opacity-60 border-2 border-indigo-700 space-y-6 w-96">
				<SecondaryLink link="/" text="Back" />
				<div className="w-fit mx-auto">
					<AppLogo />
				</div>
				<p className="text-white text-center font-semibold text-xl">Complete Your Personal Data</p>
				<form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
					<InputText id="first_name" name="first_name" placeholder="First Name" />
					<InputText id="last_name" name="last_name" placeholder="Last Name" />
					<InputText id="email" name="email" placeholder="Email" />
					<PrimaryButton type="submit" text="REGISTER" />
				</form>
			</div>
		</section>
	);
};

export default Register;
