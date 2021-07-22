import React from "react";
import "./index.css";

export const Button = ({content, onButtonClick, operationType}) => {
  return (
    <div
      className={`button ${content === "0" ? "zero" : ""} ${operationType || ""}`}
      onClick={onButtonClick(content)}
    >
      {operationType !== "nothing" ? content : null}
    </div>
  );
};
