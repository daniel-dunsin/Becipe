import React from "react";
import { BiTime } from "react-icons/bi";
import FilterSection from "../components/Home/FilterSection";
import Header from "../components/Home/Header";

const Home = () => {
  return (
    <div className="flex-1 p-8 min-h-screen">
      <Header />
      <FilterSection />
    </div>
  );
};

export default Home;
