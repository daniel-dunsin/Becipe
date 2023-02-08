import React from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <section className="flex md:flex-row flex-col w-full min-h-screen max-w-[1300px] mx-auto">
      <Sidebar />
      <MobileNav />
      <Outlet />
    </section>
  );
};

export default Layout;
