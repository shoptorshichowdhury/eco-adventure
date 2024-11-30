import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [pageTitle, setPageTitle] = useState("Home");
  let currentLocation = useLocation();

  const titleMap = [
    { path: "/", title: "Home" },
    { path: "/updateProfile", title: "Update Profile" },
    { path: "/myProfile", title: "My Profile" },
  ];

  useEffect(() => {
    const currentTitle = titleMap.find(
      (item) => item.path === currentLocation.pathname
    );
    if (currentTitle && currentTitle.title) {
      setPageTitle(currentTitle.title);
      document.title = currentTitle.title;
    }
  }, [currentLocation]);

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
