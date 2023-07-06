"use client";

import { useState, useEffect } from "react";
import { FcSearch } from "react-icons/fc";

import Limo from "./Limo";
import Suv from "./Suv";
import Bus from "./Bus";

const LimosList = ({ limos }) => {
  return (
    <div className="prompt_layout">
      {limos.map((post) => (
        <Limo key={post._id} post={post} />
      ))}
    </div>
  );
};

const SuvsList = ({ suvs }) => {
  return (
    <div className="prompt_layout">
      {suvs.map((post) => (
        <Suv key={post._id} post={post} />
      ))}
    </div>
  );
};

const BusesList = ({ buses }) => {
  return (
    <div className="prompt_layout">
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

  let curr = new Date();
  curr.setDate(curr.getDate() + 3);
  let date = curr.toISOString().substring(0, 10);
  let today = new Date();
  let date2 = today.toISOString().substring(0, 10);

  return (
    <section className="feed mb-5">
      <form className="w-full flex-center">
        <input
          type="text"
          placeholder="City, airport, address or hotel"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input"
        />
        <input
          type="date"
          required
          className="date_input"
          defaultValue={date2}
        />

        <input
          type="date"
          required
          className="date_input"
          defaultValue={date}
        />
        <button className="mx-2 hover:scale-125">
          <FcSearch />
        </button>
      </form>
      <div>
        <h3 className="category_text">Limo near New York, NY</h3>
        <LimosList limos={limos} />
        <button className="underline">more results</button>
      </div>
      <div>
        <h3 className="category_text">SUV near New York, NY</h3>
        <SuvsList suvs={suvs} />
        <button className="underline">more results</button>
      </div>
      <div>
        <h3 className="category_text">Party Bus near New York, NY</h3>
        <BusesList buses={buses} />
        <button className="underline">more results</button>
      </div>
    </section>
  );
};

export default Main;
