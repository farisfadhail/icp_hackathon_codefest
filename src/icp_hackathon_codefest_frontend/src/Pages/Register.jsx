import AppLogo from "../Components/atoms/AppLogo";
import PrimaryButton from "../Components/atoms/PrimaryButton";
import SecondaryLink from "../Components/atoms/SecondaryLink";
import InputText from "../Components/atoms/InputText";

const Register = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div class="blob"></div>
      <div class="blob-2"></div>
      <div className="p-6 rounded-md bg-indigo-900 bg-opacity-60 border-2 border-indigo-700 space-y-6 w-96">
        <SecondaryLink link="/" text="Back" />
        <div className="w-fit mx-auto">
          <AppLogo />
        </div>
        <p className="text-white text-center font-semibold text-xl">Complete Your Personal Data</p>
        <form className="flex flex-col space-y-6">
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
