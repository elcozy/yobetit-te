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
    console.log(c, e);
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
    const exists = Object.values(validityErrors).includes(false);

    setIsformValid(!exists && fieldsComplete);
  };
  const { name, email, password, confirmPassword } = data;

  const dL = [
    { name: "name", data: name, message: " Please enter your name." },
    {
      name: "email",
      data: email,
      message: " Please enter a valid email address.",
    },
    { name: "password", data: password, message: "Password is too short." },
    {
      name: "confirmPassword",
      data: confirmPassword,
      type: "password",
      message: "Passwords do not match.",
    },
  ];
  // convert camelCase to capital letters
  const capitalCase = (e) => {
    return (
      e
        .replace(/([A-Z]{1,})/g, " $1")
        .charAt(0)
        .toUpperCase() + e.replace(/([A-Z]{1,})/g, " $1").slice(1)
    );
  };
  return (
    <div>
      <ul className="yobetit_form">
        {dL.map((x, i) => (
          <li key={i}>
            <label>
              {capitalCase(x.name)}
              <span className="field_required">*</span>
            </label>
            <input
              type={`${x.type ? x.type : x.name}`}
              name={`${x.name}`}
              placeholder={capitalCase(x.name)}
              value={x.data}
              onChange={(e) => handleInput(x.name, e)}
              className={`${x.data && errorClass(x.name)}`}
            />
            {x.data && errorClass(x.name) === "has-error" && (
              <small className="invalid-feedback">{x.message}</small>
            )}
          </li>
        ))}
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
  );
};

export default Question4;
