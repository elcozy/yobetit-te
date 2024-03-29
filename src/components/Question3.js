import React, { useEffect, useState } from "react";
import { baseURL } from "./data";
import Loader from "./Loader";

const Question3 = () => {
  const [loading, setLoading] = useState(false);
  const [anyError, setAnyError] = useState(null);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  // Getting data from the API on load
  useEffect(() => findCountry(), []);

  const findCountry = (name) => {
    setAnyError(null);
    setData([]);
    setLoading(true);
    const url = !!name ? `name/${name.trim()}` : "all";

    fetch(`${baseURL}${url}`)
      .then((res) => res.json())
      .then(
        (results) => {
          if (Array.isArray(results)) {
            setData(results);
          } else {
            setAnyError(results);
          }
          setLoading(false);
        },
        (error) => {
          console.log(error);
          setAnyError(error);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <small>Input only one countries name</small>

      <div className="search_container">
        <input
          type="text"
          className="search"
          disabled={loading}
          placeholder="SEARCH FOR A COUNTRY"
          onChange={(a) => setName(a.target.value)}
          onKeyPress={(e) => e.key === "Enter" && findCountry(name)}
          value={name}
          name="search"
        />
        <button type="submit" onClick={() => findCountry(name)}>
          SEARCH
        </button>
      </div>
      {loading && <Loader />}

      {anyError ? (
        <div>Error occured with message {anyError.message}</div>
      ) : (
        <>
          <div className="question_3--wrapper">
            <div className="card_container">
              {data &&
                data.map((item, i) => (
                  <div className="country_card" key={i}>
                    <img
                      height="32"
                      src={item.flag}
                      alt={`${item.name}'s flag'`}
                    />
                    <h5>{item.name}</h5>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Question3;
