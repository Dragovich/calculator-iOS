import React from "react";
import "./index.css";

export const Button = ({content, onButtonClick, operationType}) => {
  return (
    operationType !== "nothing" ?
      <div
        className={`Button ${content === "0" ? "zero" : ""} ${operationType || ""}`}
        onClick={onButtonClick(content)}
      >
        {content}
      </div> :
      <div
        className={`Button nothing`}
      />
  );
};
