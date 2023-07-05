"use client";

import { useState, useEffect } from "react";

import Limo from "./Limo";
import Suv from "./Suv";
import Bus from "./Bus";

const LimosList = ({ limos }) => {
  return (
    <div className="mt-16 prompt_layout">
      {limos.map((post) => (
        <Limo key={post._id} post={post} />
      ))}
    </div>
  );
};

const SuvsList = ({ suvs }) => {
  return (
    <div className="mt-16 prompt_layout">
      {suvs.map((post) => (
        <Suv key={post._id} post={post} />
      ))}
    </div>
  );
};

const BusesList = ({ buses }) => {
  return (
    <div className="mt-16 prompt_layout">
      {buses.map((post) => (
        <Bus key={post._id} post={post} />
      ))}
    </div>
  );
};

const Main = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const [limos, setLimos] = useState([]);
  const [suvs, setSuvs] = useState([]);
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const fetchLimos = async () => {
      const responseLimo = await fetch("/api/limo");
      const dataLimo = await responseLimo.json();

      setLimos(dataLimo);
    };

    const fetchSuvs = async () => {
      const responseSuv = await fetch("/api/suv");
      const dataSuv = await responseSuv.json();

      setSuvs(dataSuv);
    };

    const fetchBuses = async () => {
      const responseBus = await fetch("/api/bus");
      const dataBus = await responseBus.json();

      setBuses(dataBus);
    };

    fetchLimos();
    fetchSuvs();
    fetchBuses();
  }, []);

  console.log(buses, limos, suvs);

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
      <div>
        <h3 className="category_text">Limo near location</h3>
        <LimosList limos={limos} />
      </div>
      <div>
        <h3 className="category_text">SUV near location</h3>
        <SuvsList suvs={suvs} />
      </div>
      <div>
        <h3 className="category_text">Party Bus near location</h3>
        <BusesList buses={buses} />
      </div>
    </section>
  );
};

export default Main;
