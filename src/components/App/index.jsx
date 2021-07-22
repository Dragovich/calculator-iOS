import React, { useState } from "react";
import { Button } from "../Button";
import { utils } from "../Utils/utils";
import "./index.css";

export const Calculator = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [history, setHistory] = useState(" ")

  const handleHistory = (operator, value, initValue) => {
    if (history === " ") {
      setHistory(initValue + " " + operator + " " + value);
    } else {
      setHistory(history + " " + operator + " " + value);
    }
  }

  const handleOperation = (operator, value) => {
    if (operator === "+") {
      setValue((memory + parseFloat(value)).toString());
    } else if (operator === "−") {
      setValue((memory - parseFloat(value)).toString());
    } else if (operator === "×") {
      setValue((memory * parseFloat(value)).toString());
    } else if (operator === "÷") {
      setValue((memory / parseFloat(value)).toString());
    }
  }

  const handleButtonPress = content => () => {
    const number = parseFloat(value);

    switch (content) {
      case "AC": {
        setValue("0");
        setMemory(null);
        setOperator(null);
        setHistory(" ");
        return;
      }
      case "±": {
        setValue((-number).toString());
        setHistory(-number);
        return;
      }
      case "÷":
      case "×":
      case "−":
      case "+": {
        if (operator !== null) {
          handleOperation(operator, value);
          handleHistory(operator, value, memory);
        } else {
          setMemory(parseFloat(value));
        }
        setValue("0");
        setOperator(content);
        return;
      }
      case ",": {
        if (value.includes(".")) return;
        setValue(value + ".");
        return;
      }
      case "=": {
        if (!operator) return;
        handleOperation(operator, value);
        handleHistory(operator, value, memory);
        setMemory(null);
        setOperator(null);
        return;
      }
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(number + content).toString());
    }
  };

  return (
    <div className="calculator">
      <div className="history">{history !== " " ? history : 0}</div>
      <div className="display">{utils(value)}</div>
      <div className="buttons">
        <Button className="button" onButtonClick={handleButtonPress} content="AC" operationType="function"/>
        <Button onButtonClick={handleButtonPress} content="±" operationType="function"/>
        <Button
          onButtonClick={() => {
          }}
          content="nothing"
          operationType="nothing"
        />
        <Button onButtonClick={handleButtonPress} content="÷" operationType="operation"/>
        <Button onButtonClick={handleButtonPress} content="7"/>
        <Button onButtonClick={handleButtonPress} content="8"/>
        <Button onButtonClick={handleButtonPress} content="9"/>
        <Button onButtonClick={handleButtonPress} content="×" operationType="operation"/>
        <Button onButtonClick={handleButtonPress} content="4"/>
        <Button onButtonClick={handleButtonPress} content="5"/>
        <Button onButtonClick={handleButtonPress} content="6"/>
        <Button onButtonClick={handleButtonPress} content="−" operationType="operation"/>
        <Button onButtonClick={handleButtonPress} content="1"/>
        <Button onButtonClick={handleButtonPress} content="2"/>
        <Button onButtonClick={handleButtonPress} content="3"/>
        <Button onButtonClick={handleButtonPress} content="+" operationType="operation"/>
        <Button onButtonClick={handleButtonPress} content="0"/>
        <Button onButtonClick={handleButtonPress} content=","/>
        <Button onButtonClick={handleButtonPress} content="=" operationType="operation"/>
      </div>
    </div>
  );
};
