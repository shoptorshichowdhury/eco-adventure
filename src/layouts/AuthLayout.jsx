import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";

const AuthLayout = () => {
  const [pageTitle, setPageTitle] = useState("Home");
  let currentLocation = useLocation();

  const titleMap = [
    { path: "/auth/register", title: "Register" },
    { path: "/auth/login", title: "Login" },
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
    <div className="min-h-screen">
      <Navbar></Navbar>
      <section className="font-openSans bg-[#F9F9F9] py-12 flex justify-center items-center w-11/12 mx-auto">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
