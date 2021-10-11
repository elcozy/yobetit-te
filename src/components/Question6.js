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

  // Get random value
  const randomize = () => Math.floor(Math.random() * REEL_LENGTH);

  const onSpin = () => {
    setCoins(coins - 1);

    // Pick random fruit from reel
    const spinOne = reels["one"][randomize()];
    const spinTwo = reels["two"][randomize()];
    const spinThree = reels["three"][randomize()];

    const spin = [spinOne, spinTwo, spinThree];
    setData(spin);

    const spinCount = spin.reduce((prev, curr) => {
      prev[curr] = ++prev[curr] || 1;
      return prev;
    }, {});

    // get result based on the spin result and order
    calcResult(spinCount, spin[2]);
  };

  const calcResult = ({ cherry, apple, banana, lemon }, lastPick) => {
    let win = 0;
    if (cherry === 3) {
      win = 50;
    } else if (cherry === 2 && lastPick !== "cherry") {
      win = 40;
    } else if (apple === 3) {
      win = 20;
    } else if (apple === 2 && lastPick !== "apple") {
      win = 10;
    } else if (banana === 3) {
      win = 15;
    } else if (banana === 2 && lastPick !== "banana") {
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
      {coins < 1 && <small>No more coins availiable </small>}
      <button className="btn" onClick={() => onSpin()} disabled={coins < 1}>
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
