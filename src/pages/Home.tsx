import React from "react";
import { BiTime } from "react-icons/bi";
import FilterSection from "../components/Home/FilterSection";
import Foods from "../components/Home/Foods";
import Header from "../components/Home/Header";

const Home = () => {
  return (
    <main className="flex-1 p-8 min-h-screen md:ml-[300px]">
      <Header />
      <FilterSection />
      <Foods />
    </main>
  );
};

export default Home;
