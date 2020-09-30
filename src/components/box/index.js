import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./box.css";

const Box = ({ index }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const color = useSelector((state) => state.color);
  const colorOneBox = useSelector((state) => state.colorOneBox[index]);
  const changeColorOneBox = (inputColor) => {
    dispatch({
      type: "COLORONEBOX",
      payload: { index: index, value: inputColor },
    });
  };
  return (
    <div
      className="box-area"
      style={{
        width: "150px",
        height: "150px",
        border: "1px solid green",
        borderRadius: "10px",
        backgroundColor: colorOneBox ? colorOneBox : color,
      }}
    >
      <input
        placeholder="Input Box color"
        className="box-input"
        onChange={(e) => {
          changeColorOneBox(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Box;
