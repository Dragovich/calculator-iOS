import React from "react";
import "./index.css";

const Button = ({content, onButtonClick}) => {
  return (
    <div
      className="Button"
      onClick={onButtonClick(content)}
    >
      {content}
    </div>
  );
};

export default Button;
