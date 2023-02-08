import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiCrown } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Sidebar = () => {
  const { navbarOpen, openNavbar, closeNavbar } = useGlobalContext();
  return (
    <aside
      className={`flex-[0.3] w-[100vw] md:max-w-[300px] md:static fixed top-0 left-0 min-h-[100vh] z-[6] bg-white transition duration-400 ${
        navbarOpen ? "translate-y-0" : "-translate-y-[100%] md:translate-y-0"
      }`}
    >
      <i
        className="md:hidden block fixed top-[30px] right-[30px] text-red-600 cursor-pointer font-light text-[18px] z-[6]"
        onClick={closeNavbar}
      >
        <FaTimes />
      </i>
      <div className="w-full p-8 border-b-2">
        <img
          alt="logo"
          src={"/images/light-logo.png"}
          loading="lazy"
          className="object-cover object-center w-[200px] mx-auto"
        />
      </div>
      <div className="px-8 pt-8 pb-6 flex flex-col text-center font-bold">
        <Link
          to={"/"}
          className="text-[18px] cursor-pointer hover:text-red-700"
        >
          Home
        </Link>
      </div>
      <div className="w-full block relative before:absolute before:left-[0] before:top-[50%] before:translate-x-0 before:-translate-y-[50%] before:w-[25%] before:h-[2px] before:bg-gray-300 after:absolute after:right-[0] after:top-[50%] after:translate-x-0 after:-translate-y-[50%] after:w-[25%] after:h-[2px] after:bg-gray-300">
        <span className="w-[30px] h-[30px] rounded-md bg-gray-200 text-[20px] text-red-700 flex justify-center items-center mx-auto">
          <BiCrown />
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
