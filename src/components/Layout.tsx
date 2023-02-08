import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Navbar />
    </>
  );
};

export default Layout;
