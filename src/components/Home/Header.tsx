import React from "react";
import { BiTime } from "react-icons/bi";

const Header = () => {
  return (
    <section className="w-[90%] max-w-[900px] mx-auto bg-white rounded-xl shadow-lg flex md:flex-row flex-col-reverse overflow-hidden">
      <div className="px-6 md:px-8 py-5 md:py-10 flex-[.6]">
        <header className="flex gap-x-4 items-center mb-5">
          <span className="px-2 py-1 rounded-md bg-yellow-600 text-[14px] font-bold cursor-pointer hover:text-white transition duration-300 shadow-md">
            PASTA
          </span>
          <span className="font-light text-[16px] text-gray-500 flex items-center gap-x-[5px] cursor-pointer">
            <BiTime />
            35 min
          </span>
        </header>
        <h1 className="text-[26px] md:text-[38px] font-[500] leading-[40px]">
          Creamy shrimp pasta with corn and tomatoes
        </h1>
      </div>
      <div className="flex-[.4]">
        <img
          src="/images/pasta.jpg"
          alt=""
          className="md:h-full w-full h-[200px] object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Header;
