import React from "react";
import "../components/Counter.css";
import { useState } from "react";
export default function Counter() {
  const [initialValue, setFinalValue] = useState(0);

  let increment = () => {
    setFinalValue(initialValue + 1);
  };

  let decrement = () => {
    if (initialValue > 0) {
      setFinalValue(initialValue - 1);
    } else {
      alert("number always greater than 0");
    }
  };
  return (
    <div className="main">
      <div className="card">
        <div className="count">
          <h1>{initialValue}</h1>
        </div>
        <div className="btn">
          <button type="button" onClick={increment}>
            Increment
          </button>
          <button type="button" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
