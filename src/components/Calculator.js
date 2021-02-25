import { useState } from "react";
import Keypad from "./Keypad";
import Screen from "./Screen";

const Calculator = () => {
  const [input, setInput] = useState("");

  function addInput(key) {
    var newKey = "";
    if (input.length === 0) {
      if (isNaN(Number(key))) {
        newKey = [...input];
        newKey += 0 + key;
        setInput(newKey);
        return;
      } else {
        newKey = [...input];
        newKey += key;
        setInput(newKey);
        return;
      }
    }
    newKey = input;
    newKey += key;
    setInput(newKey);
  }

  function performOperation() {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("");
    }
  }

  function clearInput() {
    setInput("");
  }

  return (
    <div className="calc_body">
      <h1 className="calc_head">calculator</h1>
      <form>
        <Screen input={input} />
        <Keypad
          addInput={addInput}
          clearInput={clearInput}
          performOperation={performOperation}
        />
      </form>
    </div>
  );
};

export default Calculator;
