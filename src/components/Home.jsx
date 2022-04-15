import React from "react";
import SearchCity from "./SearchCity";
import { HomeContent } from "./HomeContent";

const Home = ({ onDataChange }) => {
  return (
    <>
      <SearchCity onDataChange={onDataChange} />
      <HomeContent />
    </>
  );
};

export default Home;
