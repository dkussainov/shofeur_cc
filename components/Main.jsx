"use client";

import { useState } from "react";

import Limo from "./Limo";
import Suv from "./Suv";
import Bus from "./Bus";

const Main = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <section className="feed">
      <form className=" w-full flex-center">
        <input
          type="text"
          placeholder="Search for Limo, SUV or a Party Bus"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <div>Limo</div>
      <div>SUV</div>
      <div>Party Bus</div>
    </section>
  );
};

export default Main;
