import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main-content min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
