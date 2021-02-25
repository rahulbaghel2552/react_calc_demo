import { useState } from "react";
import Keypad from "./Keypad";
import Screen from "./Screen";

const Calculator = () => {
  const [input, setInput] = useState("");

  function addInput(keyVal) {
    setInput(input.concat(keyVal));
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
