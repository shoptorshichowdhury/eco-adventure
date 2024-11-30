import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
 
  return (
    <div>
      <Navbar></Navbar>
      <main className="font-openSans">
        <Outlet></Outlet>
      </main>
      <footer className="bg-[#F9F9F9] font-bebas">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
