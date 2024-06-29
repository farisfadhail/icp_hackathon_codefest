import { useState } from "react";
import NavLink from "./NavLink";
import { useAuth } from "../../Hooks/AuthProvider";

const ProfileButton = () => {
	const [open, isOpen] = useState(false);
	const { logout } = useAuth();

	const handleOpenMenu = () => {
		isOpen(!open);
	};

	async function logoutEvent(event) {
		event.preventDefault();

		logout();

		return false;
	}

	return (
		<div className="relative rounded-md bg-indigo-700 py-1.5 px-3 z-10">
			<button type="button" onClick={handleOpenMenu} className="flex items-center hover:text-gold-700 text-white">
				<svg xmlns="http://www.w3.org/2000/svg" className="w-8" viewBox="0 0 256 256">
					<path
						fill="currentColor"
						d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M68.87 198.42a68 68 0 0 1 118.26 0a91.8 91.8 0 0 1-118.26 0m124.3-5.55a75.6 75.6 0 0 0-44.51-34a44 44 0 1 0-41.32 0a75.6 75.6 0 0 0-44.51 34a92 92 0 1 1 130.34 0M128 156a36 36 0 1 1 36-36a36 36 0 0 1-36 36"
					/>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 24 24">
					<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 10l5 5l5-5" />
				</svg>
			</button>
			{open && (
				<div className="bg-indigo-700 p-4 absolute right-0 rounded-b-md rounded-tl-md">
					<ul className="space-y-4 text-white">
						<NavLink link="/" text="Home" />
						<NavLink link="/dashboard" text="Dashboard" />
						<form>
							<button type="submit" className="px-6 py-1 text-lg" onClick={logoutEvent}>
								Logout
							</button>
						</form>
					</ul>
				</div>
			)}
		</div>
	);
};

export default ProfileButton;
