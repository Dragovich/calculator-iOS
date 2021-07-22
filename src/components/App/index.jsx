import React from "react";
import Button from "../Button";
import utils from "../Utils/utils";
import "./index.css";

const Calculator = () => {
  return (
    <div className="Calculator">
      <div className="display">{utils(value)}</div>
      <div className="display">{utils(value)}</div>
      <div className="buttons">
        <Button onButtonClick={} content="AC" />
        <Button onButtonClick={} content="±" />
        <Button onButtonClick={} content="" />
        <Button onButtonClick={} content="÷" />
        <Button onButtonClick={} content="7" />
        <Button onButtonClick={} content="8" />
        <Button onButtonClick={} content="9" />
        <Button onButtonClick={} content="×" />
        <Button onButtonClick={} content="4" />
        <Button onButtonClick={} content="5" />
        <Button onButtonClick={} content="6" />
        <Button onButtonClick={} content="−" />
        <Button onButtonClick={} content="1" />
        <Button onButtonClick={} content="2" />
        <Button onButtonClick={} content="3" />
        <Button onButtonClick={} content="+" />
        <Button onButtonClick={} content="0" />
        <Button onButtonClick={} content="." />
        <Button onButtonClick={} content="=" />
      </div>
    </div>
  );
};

export default Calculator;
