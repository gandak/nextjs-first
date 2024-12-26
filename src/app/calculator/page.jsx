"use client";
import styles from "./calculatorStyles.module.css";
const { useState } = require("react");

const Calculator = () => {
  const [screen, setScreen] = useState("");
  let [operationCounter, setOperationCounter] = useState(0);
  const [operation, setOperation] = useState("");
  let nums = [];

  const buttonClicked = (x) => {
    switch (x) {
      case "+":
        setOperation("+");
        break;
      case "-":
        setOperation("-");
        break;
      case "/":
        setOperation("/");
        break;
      case "*":
        setOperation("*");
        break;
      case "%":
        setOperation("%");
        break;
    }

    if (x === "+" || x === "-" || x === "*" || x === "/" || x === "%")
      setOperationCounter(operationCounter + 1);

    if (operationCounter === 1 || operationCounter === 0) {
      setScreen(screen + x);
      // operationCounter = 1;
    }

    if (operationCounter === 2) {
      for (let i = 0; i < screen.length; i++) {
        if (screen[i] === "+") {
          nums = screen.split("+");
          console.log(nums);
          setScreen(Number(nums[0]) + Number(nums[1]) + "x");
          setOperationCounter(1);
        }
      }
    }
  };

  const operaionHandler = () => {
    if (screen.includes("+")) {
      nums = screen.split("+");
      setScreen(Number(nums[0]) + Number(nums[1]));
    }
    if (screen.includes("-")) {
      nums = screen.split("-");
      setScreen(Number(nums[0]) - Number(nums[1]));
    }
    if (screen.includes("*")) {
      nums = screen.split("*");
      setScreen(Number(nums[0]) * Number(nums[1]));
    }
    if (screen.includes("/")) {
      nums = screen.split("/");
      setScreen(Number(nums[0]) / Number(nums[1]));
    }
    if (screen.includes("%")) {
      nums = screen.split("%");
      setScreen(Number(nums[0]) % Number(nums[1]));
    }
  };

  // const addHandler = () => {

  // }

  const clearScreen = () => {
    setScreen("");
  };
  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.screenContainer}>
        <p>{screen}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={() => buttonClicked(1)}>1</button>
        <button onClick={() => buttonClicked(2)}>2</button>
        <button onClick={() => buttonClicked(3)}>3</button>
        <button onClick={() => buttonClicked(4)}>4</button>
        <button onClick={() => buttonClicked(5)}>5</button>
        <button onClick={() => buttonClicked(6)}>6</button>
        <button onClick={() => buttonClicked(7)}>7</button>
        <button onClick={() => buttonClicked(8)}>8</button>
        <button onClick={() => buttonClicked(9)}>9</button>
        <button onClick={() => buttonClicked(0)}>0</button>
        <button onClick={() => buttonClicked("+")}>+</button>
        <button onClick={() => buttonClicked("-")}>-</button>
        <button onClick={() => buttonClicked("*")}>*</button>
        <button onClick={() => buttonClicked("/")}>/</button>
        <button onClick={() => buttonClicked("%")}>%</button>
        <button onClick={operaionHandler}>=</button>
        <button onClick={clearScreen}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
