import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {["7", "8", "9", "/"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {["4", "5", "6", "*"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {["1", "2", "3", "-"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {["0", ".", "=", "+"].map((item) => (
          <button key={item} onClick={() => item === "=" ? calculateResult() : handleClick(item)}>
            {item}
          </button>
        ))}
        <button onClick={clearInput} className="clear">C</button>
      </div>
    </div>
  );
};

export default App;
