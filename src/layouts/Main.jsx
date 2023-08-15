import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";

AOS.init();

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
