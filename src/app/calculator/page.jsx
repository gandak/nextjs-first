"use client";
const { useState } = require("react");

const Calculator = () => {
  const [number, setNumber] = useState(0);

  const changeNumber = (x) => {
    setNumber(x);
  };
  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={() => changeNumber(1)}>1</button>
      <button onClick={() => changeNumber(2)}>2</button>
      <button onClick={() => changeNumber(3)}>3</button>
      <button onClick={() => changeNumber(4)}>4</button>
      <button onClick={() => changeNumber(5)}>5</button>
      <button onClick={() => changeNumber(6)}>6</button>
      <button onClick={() => changeNumber(7)}>7</button>
      <button onClick={() => changeNumber(8)}>8</button>
      <button onClick={() => changeNumber(9)}>9</button>
      <button onClick={() => changeNumber(0)}>0</button>
    </div>
  );
};

export default Calculator;
