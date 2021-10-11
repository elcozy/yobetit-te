import React, { useState } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";


// All calculations done on the Frontend

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("quest1");

  const handleQuest = (a) => {
    // update the state to the question tab selected
    setActiveTab(`quest${a}`);
  };

  return (
    <div className="tabs">
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
            <h2 className="tab_title">
              Question 1 (Request one country from BE)
            </h2>

            <Question1 />
          </>
        ) : activeTab === "quest2" ? (
          <>
            <h2 className="tab_title">
              Question 2 (Request a list of countries from BE)
            </h2>
            <Question2 />
          </>
        ) : activeTab === "quest3" ? (
          <>
            <h2 className="tab_title">
              Question 3 (Listing all Countries with a Search Field)
            </h2>
            <Question3 />
          </>
        ) : activeTab === "quest4" ? (
          <>
            <h2 className="tab_title">Question 4 (SignUp Form)</h2>
            <Question4 />
          </>
        ) : activeTab === "quest5" ? (
          <>
            <h2 className="tab_title">Question 5 (Login Form)</h2>
            <Question5 />
          </>
        ) : (
          <>
            <h2 className="tab_title">Question 6 (Slot Machine)</h2>
            <Question6 />
            <hr style={{ width: "100%" }} size="3" color="black" />
            <h2>Rewards</h2>
            <h5>
              You only get rewarded when the friuts appear from the first item
              in the row{" "}
            </h5>
            <ul>
              <li>
                3 cherries in a row: +50 coins, 2 cherries in a row: +40 coins
              </li>
              <li>
                3 Apples in a row: +20 coins, 2 Apples in a row: +10 coins
              </li>
              <li>
                3 Bananas in a row: +15 coins, 2 Bananas in a row: +5 coins
              </li>
              <li>3 lemons in a row: +3 coins</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
export default Tabs;
