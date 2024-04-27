import React from "react";

const Box = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Box;
