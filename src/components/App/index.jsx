import React, { useState } from "react";
import { Button } from "../Button";
import { utils } from "../Utils/utils";
import "./index.css";

export const Calculator = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [history, setHistory] = useState("")

  const handleHistory = (operator, value, initValue) => {
    if (history === "") {
      setHistory(initValue + " " + operator + " " + value);
    } else {
      setHistory(history + " " + operator + " " + value);
    }
  }

  const handleButtonPress = content => () => {
    const number = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      setHistory(null);
      return;
    }

    if (content === "±") {
      setValue((-number).toString());
      setHistory(-number);
      return;
    }

    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
        handleHistory(operator, value, memory);
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }

    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
        handleHistory(operator, value, memory);
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("×");
      return;
    }

    if (content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
        handleHistory(operator, value, memory);
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("−");
      return;
    }

    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
        handleHistory(operator, value, memory);
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }

    if (content === ",") {
      if (value.includes(".")) return;
      setValue(value + ".");
      return;
    }

    if (content === "=") {
      if (!operator) return;
      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "−") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      handleHistory(operator, value, memory);
      setMemory(null);
      setOperator(null);
      return;
    }

    // switch (content) {
    //   case "AC": {
    //     setValue("0");
    //     setMemory(null);
    //     setOperator(null);
    //     setHistory(null);
    //     break;
    //   }
    //   case "±": {
    //     setValue((-number).toString());
    //     setHistory(-number);
    //     break;
    //   }
    //   case "÷": {
    //     if (operator !== null) {
    //       if (operator === "+") {
    //         setMemory(memory + parseFloat(value));
    //       } else if (operator === "−") {
    //         setMemory(memory - parseFloat(value));
    //       } else if (operator === "×") {
    //         setMemory(memory * parseFloat(value));
    //       } else if (operator === "÷") {
    //         setMemory(memory / parseFloat(value));
    //       }
    //       handleHistory(operator, value, memory);
    //     } else {
    //       setMemory(parseFloat(value));
    //     }
    //     setValue("0");
    //     setOperator("÷");
    //     break;
    //   }
    //   case "×": {
    //     if (operator !== null) {
    //       if (operator === "+") {
    //         setMemory(memory + parseFloat(value));
    //       } else if (operator === "−") {
    //         setMemory(memory - parseFloat(value));
    //       } else if (operator === "×") {
    //         setMemory(memory * parseFloat(value));
    //       } else if (operator === "÷") {
    //         setMemory(memory / parseFloat(value));
    //       }
    //       handleHistory(operator, value, memory);
    //     } else {
    //       setMemory(parseFloat(value));
    //     }
    //     setValue("0");
    //     setOperator("×");
    //     break;
    //   }
    //   case "−": {
    //     if (operator !== null) {
    //       if (operator === "+") {
    //         setMemory(memory + parseFloat(value));
    //       } else if (operator === "−") {
    //         setMemory(memory - parseFloat(value));
    //       } else if (operator === "×") {
    //         setMemory(memory * parseFloat(value));
    //       } else if (operator === "÷") {
    //         setMemory(memory / parseFloat(value));
    //       }
    //       handleHistory(operator, value, memory);
    //     } else {
    //       setMemory(parseFloat(value));
    //     }
    //     setValue("0");
    //     setOperator("−");
    //     break;
    //   }
    //   case "+": {
    //     if (operator !== null) {
    //       if (operator === "+") {
    //         setMemory(memory + parseFloat(value));
    //       } else if (operator === "−") {
    //         setMemory(memory - parseFloat(value));
    //       } else if (operator === "×") {
    //         setMemory(memory * parseFloat(value));
    //       } else if (operator === "÷") {
    //         setMemory(memory / parseFloat(value));
    //       }
    //       handleHistory(operator, value, memory);
    //     } else {
    //       setMemory(parseFloat(value));
    //     }
    //     setValue("0");
    //     setOperator("+");
    //     break;
    //   }
    //   case ",": {
    //     if (value.includes(".")) break;
    //     setValue(value + ".");
    //     break;
    //   }
    //   case "=": {
    //     if (!operator) break;
    //     if (operator === "+") {
    //       setValue((memory + parseFloat(value)).toString());
    //     } else if (operator === "−") {
    //       setValue((memory - parseFloat(value)).toString());
    //     } else if (operator === "×") {
    //       setValue((memory * parseFloat(value)).toString());
    //     } else if (operator === "÷") {
    //       setValue((memory / parseFloat(value)).toString());
    //     }
    //     handleHistory(operator, value, memory);
    //     setMemory(null);
    //     setOperator(null);
    //     break;
    //   }
    // }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(number + content).toString());
    }
  };

  return (
    <div className="Calculator">
      <div className="display">{history}</div>
      <div className="display">{utils(value)}</div>
      <div className="buttons">
        <Button onButtonClick={handleButtonPress} content="AC" operationType="function"/>
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
