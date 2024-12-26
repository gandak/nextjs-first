"use client";

import Square from "@/components/Square";
import "./boxstyle.css";

const { useState } = require("react");

const BoxFunction = () => {
  const [numbers, setNumbers] = useState([2, 3, 1, 5, 6, 4, 9, 7, 8]);

  const IncreaseFunction = () => {
    // const x = numbers.sort();
    setNumbers([...numbers.sort()]);
  };
  const DecreaseFunction = () => {
    // const x = numbers.sort((a, b) => b - a);
    setNumbers([...numbers.sort((a, b) => b - a)]);
  };

  return (
    <div className="boxContainer">
      <div className="buttons">
        <button onClick={IncreaseFunction}>Increase</button>
        <button onClick={DecreaseFunction}>Decrease</button>
      </div>
      <Square value={numbers} />
    </div>
  );
};

export default BoxFunction;
