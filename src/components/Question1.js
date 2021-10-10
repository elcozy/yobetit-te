import React, { useState } from "react";
import { baseURL } from "./data";
import Loader from "./Loader";

const Question1 = () => {
  const [loading, setLoading] = useState(false);
  const [anyError, setAnyError] = useState(null);
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(null);
  const [name, setName] = useState("");

  // API link given "https://restcountries.eu" is depreciated but "https://restcountries.com" works instead.
  //   The result from fetching this URL https://restcountries.eu/rest/v2/name/${name}?fullText=true
  //   should return an Object since we want to get a single country with the exact name.

  const fetchCountry = () => {
    setLoading(true);
    fetch(`${baseURL}name/${name.trim()}?fullText=true`)
      .then((res) => res.json())
      .then(
        (results) => {
          setData(Array.isArray(results) === true ? results[0] : null);
          setNotFound(Array.isArray(results) === true ? false : true);
          setLoading(false);
        },
        (error) => {
          setAnyError(error);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <div className="example">
        <input
          className="search"
          type="text"
          placeholder="SEARCH FOR A COUNTRY"
          onChange={(a) => setName(a.target.value)}
          value={name}
          name="search"
          onKeyPress={(e) => e.key === "Enter" && fetchCountry()}
        />
        <button type="submit" onClick={() => fetchCountry()} disabled={!name}>
          SEARCH
        </button>
      </div>
      {loading && <Loader />}
      {anyError && (
        <div>
          Sorry {`:(`} {anyError.message}
        </div>
      )}
      {notFound && <div>Sorry {`:(`} Country not Found</div>}
      {data && (
        <div>
          <div className="card_container">
            <div className="country_card">
              <img height="32" src={data.flag} alt={`${data.name}'s flag'`} />
              <h5>{data.name}</h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Question1;
