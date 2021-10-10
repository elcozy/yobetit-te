import React, { useEffect, useState } from "react";

const Question4 = () => {
  // const [haveSubmitted, setHaveSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isFormValid, setIsformValid] = useState(false);
  const [formErrors, setFormError] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
    validateField();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleInput = (c, e) => {
    setData({
      ...data,
      [c]: e.target.value,
    });
  };

  const handleSubmit = (c, e) => {
    console.log("Submitted");
    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const errorClass = (name) => {
    if (formErrors[name]) return "valid";
    if (!formErrors[name]) return "has-error";
    return "";
  };

  const validateField = () => {
    let validityErrors = { ...formErrors };

    // validating field

    const isEmailValid = data.email.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );
    validityErrors.email = data.email && (!!isEmailValid ? "valid" : false);

    validityErrors.password =
      data.password && (data.password.length >= 6 ? "valid" : false);

    validityErrors.confirmPassword =
      data.confirmPassword &&
      (validityErrors.password && data.password === data.confirmPassword
        ? "valid"
        : false);

    validityErrors.name = data.name && (!!data.name ? "valid" : false);

    setFormError(validityErrors);

    const fieldsComplete = !!(
      data.name &&
      data.email &&
      data.password &&
      data.confirmPassword
    );

    var exists = Object.values(validityErrors).includes(false);

    setIsformValid(!exists && fieldsComplete);
  };
  const { name, email, password, confirmPassword } = data;
  return (
    <div>
      <div>
        <ul className="yobetit_form">
          <li>
            <label>
              Name <span className="field_required">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => handleInput("name", e)}
              className={`${name && errorClass("name")}`}
            />
            {name && errorClass("name") === "has-error" && (
              <small className="invalid-feedback">
                Please enter your name.
              </small>
            )}
          </li>
          <li>
            <label>
              Email <span className="field_required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleInput("email", e)}
              className={`${email && errorClass("email")}`}
            />
            {email && errorClass("email") === "has-error" && (
              <small className="invalid-feedback">
                Please enter a valid email address.
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
              value={password}
              onChange={(e) => handleInput("password", e)}
              className={`${password && errorClass("password")}`}
            />
            {password && errorClass("password") === "has-error" && (
              <small className="invalid-feedback">Password is too short.</small>
            )}{" "}
          </li>
          <li>
            <label>
              Confirm Password <span className="field_required">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => handleInput("confirmPassword", e)}
              className={`${confirmPassword && errorClass("confirmPassword")}`}
            />
            {confirmPassword &&
              errorClass("confirmPassword") === "has-error" && (
                <small className="invalid-feedback">
                  Passwords do not match.
                </small>
              )}
          </li>

          <li>
            <button
              className="submit btn"
              disabled={!isFormValid}
              onClick={(e) => handleSubmit(e)}
            >
              Submit {isFormValid}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Question4;
