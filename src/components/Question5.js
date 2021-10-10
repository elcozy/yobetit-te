import React, { useState } from "react";

const Question5 = () => {
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
            />
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
            />
          </li>

          <li>
            <button
              disabled={
                !(
                  data.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
                  data.password
                )
              }
            >
              Submit
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Question5;
