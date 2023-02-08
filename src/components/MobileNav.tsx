import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
const MobileNav = () => {
  const { openNavbar } = useGlobalContext();
  return (
    <nav className="flex items-center text-white font-bold justify-between md:hidden bg-black px-6 py-3">
      <h1 className="text-[19px]">Becipe</h1>
      <span onClick={openNavbar}>
        <FaBars />
      </span>
    </nav>
  );
};

export default MobileNav;
