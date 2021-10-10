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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    validateField();
  }, [data]);

  const handleInput = (c, e) => {
    setData({
      ...data,
      [c]: e.target.value,
    });
  };

  const handleSubmit = (c, e) => {
    console.log("submitted");
  };

  const errorClass = (name) => {
    if (!formErrors[name]) return "has-error";
    console.log("NO errrorrrr", name);
    return "";
  };

  const validateField = () => {
    let validityErrors = formErrors;

    const isEmailValid = data.email.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );
    validityErrors.email = isEmailValid ? undefined : " is invalid";

    validityErrors.password =
      data.password.length >= 6 ? undefined : " is too short";

    validityErrors.confirmPassword =
      !validityErrors.password && data.password === data.confirmPassword
        ? undefined
        : " do not match";

    validityErrors.name = !!data.name ? undefined : " cannot not be empty";
    console.log(">>>>", validityErrors);

    console.log(
      "<<<<<<<",
      !Object.values(validityErrors).filter((x) => !!x).length
    );

    setFormError(validityErrors);
    setIsformValid(!Object.values(validityErrors).filter((x) => !!x).length);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} method="post">
        <ul className="yobetit_form">
          <li>
            <label>
              Name <span className="field_required">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={(e) => handleInput("name", e)}
              className={`${errorClass("name")}`}
            />
          </li>
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
              className={`${errorClass("email")}`}
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
              className={`${errorClass("password")}`}
            />
          </li>
          <li>
            <label>
              Confirm Password <span className="field_required">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={data.confirmPassword}
              onChange={(e) => handleInput("confirmPassword", e)}
              className={`${errorClass("confirmPassword")}`}
            />
          </li>

          <li>
            <button
              className="submit"
              disabled={!isFormValid}
              onClick={(e) => handleSubmit(e)}
            >
              Submit {isFormValid}
            </button>
          </li>
        </ul>
      </form>
      {/* <FormErrors formErrors={data.formErrors} /> */}
    </div>
  );
};

export default Question4;

// const FormErrors = ({ formErrors }) => (
//   <div className="formErrors">
//     {Object.keys(formErrors).map((fieldName, i) => {
//       if (formErrors[fieldName].length > 0) {
//         return (
//           <p key={i}>
//             {fieldName} {formErrors[fieldName]}
//           </p>
//         );
//       } else {
//         return "";
//       }
//     })}
// </div>
// );
