import React, { useState } from "react";
import Loader from "./Loader";

const Question5 = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    isLoggedIn: false,
    jwtToken: "",
  });

  const handleInput = (c, e) => {
    setData({
      ...data,
      [c]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
    }, 2000); //wait 2 seconds
    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validatateEmail = !!data.email.match(
    /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
  );
  return (
    <div>
      <div>
        <ul className="yobetit_form">
          <li>
            <label>
              Email <span className="field_required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => handleInput("email", e)}
              className={`${
                data.email &&
                (data.email && !validatateEmail ? "has-error" : "valid")
              }`}
            />
            {data.email && !validatateEmail && (
              <small className="invalid-feedback">
                Email address not valid.
              </small>
            )}
          </li>
          <li>
            <label>
              Password <span className="field_required">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => handleInput("password", e)}
              className={`${
                data.password &&
                (data.password.length < 2 ? "has-error" : "valid")
              }`}
            />
          </li>

          <li>
            <button
              className="submit btn"
              onClick={handleSubmit}
              disabled={!(validatateEmail && data.password)}
            >
              Submit
            </button>
          </li>
        </ul>
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Question5;
