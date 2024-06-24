import NavLink from "../atoms/NavLink";
import AppLogo from "../atoms/AppLogo";
import SecondaryLink from "../atoms/SecondaryLink";
import PrimaryButton from "../atoms/PrimaryButton";

const Navbar = () => {
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
        <SecondaryLink link="/register" text="REGISTER" />
        <PrimaryButton type="submit" text="LOGIN" />
      </div>
    </nav>
  );
};

export default Navbar;
