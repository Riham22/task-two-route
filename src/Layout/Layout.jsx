import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />

      <div className="h-screen w-full">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
