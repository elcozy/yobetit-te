import React, { useState } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("quest1");

  const handleQuest = (a) => {
    // update the state to the question tab selected
    setActiveTab(`quest${a}`);
  };

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        {[1, 2, 3, 4, 5, 6].map((value) => (
          <li
            key={value}
            className={activeTab === `quest${value}` ? "active" : undefined}
            onClick={() => handleQuest(value)}
          >
            Question {value}
          </li>
        ))}
      </ul>
      <div className="outlet">
        {activeTab === "quest1" ? (
          <>
            <h2>Question 1 (Request one country from BE)</h2>

            <Question1 />
          </>
        ) : activeTab === "quest2" ? (
          <>
            <h2>Question 2 (Request a list of countries from BE)</h2>
            <Question2 />
          </>
        ) : activeTab === "quest3" ? (
          <>
            <h2>Question 3 (Listing all Countries with a Search Field)</h2>
            <Question3 />
          </>
        ) : activeTab === "quest4" ? (
          <>
            <h2>Question 4(SignUp Form)</h2>
            <Question4 />
          </>
        ) : activeTab === "quest5" ? (
          <>
            <h2>Question 5 (Login Form)</h2>
            <Question5 />
          </>
        ) : (
          <Question6 />
        )}
      </div>
    </div>
  );
};
export default Tabs;
