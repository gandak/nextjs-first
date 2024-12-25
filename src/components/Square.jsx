"use client";

import { numbers } from "@/app/sudo/numbers";
const { useState } = require("react");

const Square = (props) => {
  return (
    <div className="numberContainer">
      {props.value.map((prop) => (
        <div className="number">{prop}</div>
      ))}
    </div>
  );
};

export default Square;
