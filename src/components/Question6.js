import React, { useState } from "react";

const Question6 = () => {
  const [anyError] = useState(null);
  const [coins, setCoins] = useState(20);
  const [coinsWon, setCoinsWon] = useState(0);
  const [data, setData] = useState(null);
  const REEL_LENGTH = 8;
  const reels = {
    one: [
      "cherry",
      "lemon",
      "apple",
      "lemon",
      "banana",
      "banana",
      "lemon",
      "lemon",
    ],
    two: [
      "lemon",
      "apple",
      "lemon",
      "lemon",
      "cherry",
      "apple",
      "banana",
      "lemon",
    ],
    three: [
      "lemon",
      "apple",
      "lemon",
      "apple",
      "cherry",
      "lemon",
      "banana",
      "lemon",
    ],
  };

  const onSpin = () => {
    setCoins(coins - 1);
    const spinOne = reels["one"][Math.floor(Math.random() * REEL_LENGTH)];
    const spinTwo = reels["one"][Math.floor(Math.random() * REEL_LENGTH)];
    const spinThree = reels["one"][Math.floor(Math.random() * REEL_LENGTH)];
    const spin = [spinOne, spinTwo, spinThree];
    setData(spin);
    const spinCount = spin.reduce((prev, curr) => {
      prev[curr] = ++prev[curr] || 1;
      return prev;
    }, {});
    calcResult(spinCount);
  };

  const calcResult = ({ cherry, apple, banana, lemon }) => {
    let win = 0;
    if (cherry === 3) {
      win = 50;
    } else if (cherry === 2) {
      win = 40;
    } else if (apple === 3) {
      win = 20;
    } else if (apple === 2) {
      win = 10;
    } else if (banana === 3) {
      win = 15;
    } else if (banana === 2) {
      win = 5;
    } else if (lemon === 3) {
      win = 3;
    }
    setCoinsWon(win);
    if (win) setCoins(coins + win);
  };

  return anyError ? (
    <div>Error occured with message {anyError.message}</div>
  ) : (
    <div>
      <h3>
        Available Coins: <b>{coins}</b>
      </h3>
      <button className="btn" onClick={() => onSpin()}>
        SPIN
      </button>

      {data && (
        <>
          <h3>
            Spin Winning Coins: {coinsWon ? "+" : null}
            {coinsWon}
          </h3>
          <div className="pair_container">
            {data.map((pair, idx) => (
              <span key={idx} className="pair">
                {pair}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Question6;
