import Navbar from "../Components/molecules/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="px-12">
        <div class="blob"></div>
        <div class="blob-2"></div>
        {children}
      </section>
      <footer className="h-10">
        <p className="text-center text-white">Copyright @ JoinVest</p>
      </footer>
    </>
  );
};

export default MainLayout;
