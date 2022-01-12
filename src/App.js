import "./App.css";
import { NumberButton } from "./components/NumberButton";
import { Display } from "./components/Display";
import { Operator } from "./components/Operator";
import { EqualsButton } from "./components/EqualsButton";
import { evaluate } from "mathjs";
import { useEffect, useState } from "react";
function App() {
  const [value, setValue] = useState("0");
  const onValueChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["C", "AC", "+", "-", "/", "*"];
  useEffect(() => {
    console.log(evaluate("2+3"));
  }, []);

  const handleButtonClick = (keyName) => {
    var result = "";
    if (
      typeof keyName == "number" ||
      keyName == "*" ||
      keyName == "+" ||
      keyName == "-" ||
      keyName == "/"
    ) {
      if (typeof keyName == "number") {
        if (value == "0") {
          setValue("");
        }
      }
      setValue(value + keyName);
    } else {
      if (keyName == "C") {
        setValue(value.slice(0, value.length - 1));
        value === "" ? setValue("0") : setValue(value);
      } else if (keyName == "AC") {
        setValue("0");
      } else if (keyName == "=") {
        try {
          result = evaluate(value);
          setValue(result);
        } catch (err) {
          setValue("Syntax Error");
        }
      }
    }
  };
  return (
    <div className="rounded-lg max-w-lg px-4 shadow-lg mx-auto font-mono">
      <h1 className="font-bold text-2xl">Simple Calculator</h1>
      <Display value={value} onValueChange={onValueChange} />
      <div className="flex flex-row max-w-full">
        <div className="mx-5 grid grid-cols-3 w-44 max-w-sm ">
          {numbers.map((number) => {
            return (
              <div className="last-of-type:col-start-2">
                <NumberButton number={number} handleClick={handleButtonClick} />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 grid-rows-4 w-1/2 my-1 mx-2">
          {operators.map((operator) => {
            return (
              <Operator
                handleClick={handleButtonClick}
                type={operator}
              ></Operator>
            );
          })}
          <EqualsButton handleClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
