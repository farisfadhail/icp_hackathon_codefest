import ProfileButton from "../atoms/ProfileButton";

const AuthNavbar = () => {
  return (
    <nav className="flex items-center justify-end pe-12 pt-6">
      <ProfileButton />
    </nav>
  );
};

export default AuthNavbar;
