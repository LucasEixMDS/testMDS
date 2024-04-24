import Footer from "./components/Layout/Footer";
import HeaderDesktop from "./components/Layout/HeaderDesktop"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="backPage">
      <HeaderDesktop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
