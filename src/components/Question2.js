import React, { useEffect, useState } from "react";
import { baseURL } from "./data";
import Loader from "./Loader";

const Question2 = () => {
  const [loading, setLoading] = useState(false);
  const [anyError, setAnyError] = useState(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [countryNames, setCountryNames] = useState("");

  useEffect(() => {
    findCountry();
  }, []);

  const findCountry = (name) => {
    const url = !!name ? `name/${name.trim()}` : "all";
    fetch(`${baseURL}${url}`)
      .then((res) => res.json())
      .then(
        (results) => {
          setData(results);
        },
        (error) => {
          console.log(true, "err");

          setAnyError(error);
          setLoading(false);
        }
      );
  };

  const filterData = () => {
    setLoading(true);

    const searchCountries = countryNames
      .trim()
      .toLowerCase()
      .split(",")
      .map((c) => c.trim());

    const filtered = data.filter((value) => {
      // console.log(value.name, value.name.includes("Korea"));
      return searchCountries.some((c) => value.name.toLowerCase().includes(c));
    });
    setFilteredData(filtered);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <>
      <div className="question_2--wrapper">
        <small>Seperate countries by commas. Eg: Malta,Sweden,Hungary</small>
        <div className="example">
          <input
            type="text"
            className="search"
            placeholder="Seperate countries by commas. Eg: Malta,Sweden,Hungary"
            onChange={(a) => setCountryNames(a.target.value)}
            onKeyPress={(e) => e.key === "Enter" && filterData()}
            value={countryNames}
            name="search2"
          />
          <button type="submit" onClick={() => filterData()}>
            SEARCH
          </button>
        </div>
        <div className="card_container">
          {filteredData &&
            filteredData.map((item, i) => (
              <div className="country_card" key={i}>
                <img height="32" src={item.flag} alt={`${item.name}'s flag'`} />
                <h5>{item.name}</h5>
              </div>
            ))}
        </div>
      </div>
      {anyError && <div>Error occured with message {anyError.message}</div>}
      {loading && <Loader />}
    </>
  );
};

export default Question2;
