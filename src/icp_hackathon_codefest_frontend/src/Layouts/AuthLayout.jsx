import Sidebar from "../Components/molecules/Sidebar";
import AuthNavbar from "../Components/molecules/AuthNavbar";

const AuthLayout = ({ children }) => {
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
