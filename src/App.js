import React, { useState } from "react";
import "./App.css";
import Box from "./components/box";
import { useDispatch, useSelector } from "react-redux";
import { render } from "@testing-library/react";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  const changeColor = (color) => {
    dispatch({ type: "COLOR", payload: color });
  };

  const renderBox = () => {
    let boxArray = [];
    for (let i = 0; i < count; i++) {
      boxArray.push(<Box index={i} />);
    }
    return boxArray;
  };

  return (
    <div>
      <div className="main">
        <div>
          <h3>Number of Box: {count}</h3>
        </div>
        <div>
          <button onClick={() => increase()}>Increase</button>
          <button onClick={() => decrease()}>Decrease</button>
          <button onClick={() => reset()}>Reset</button>
        </div>
        <div>
          <input placeholder="Input some color" style={{paddingLeft:"40px"}}  onChange={(e) => changeColor(e.target.value)}></input>
        </div>
      </div>
      <div className="box-area-1">{renderBox()}</div>
    </div>
  );
}

export default App;
