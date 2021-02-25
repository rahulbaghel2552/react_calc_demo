const Keypad = ({ addInput, clearInput, performOperation }) => {
  const keyVals = [7, 8, 9, "C", 4, 5, 6, "/", 1, 2, 3, "*", 0, "+", "-", "="];

  return (
    <div className="form_row keypad_row">
      {keyVals.map((keyVal) => {
        if (keyVal === "+") {
          return (
            <button
              type="button"
              onClick={() => {
                addInput(keyVal);
              }}
            >
              <i class="fas fa-plus "></i>
            </button>
          );
        } else if (keyVal === "-") {
          return (
            <button
              type="button"
              onClick={() => {
                addInput(keyVal);
              }}
            >
              <i class="fas fa-minus"></i>
            </button>
          );
        } else if (keyVal === "*") {
          return (
            <button
              type="button"
              onClick={() => {
                addInput(keyVal);
              }}
            >
              <i class="fas fa-times"></i>
            </button>
          );
        } else if (keyVal === "/") {
          return (
            <button
              type="button"
              onClick={() => {
                addInput(keyVal);
              }}
            >
              <i class="fas fa-divide"></i>
            </button>
          );
        } else if (keyVal === "=") {
          return (
            <button
              type="button"
              onClick={() => {
                performOperation(keyVal);
              }}
            >
              <i class="fas fa-equals"></i>
            </button>
          );
        } else if (keyVal === "C") {
          return (
            <button
              type="button"
              onClick={() => {
                clearInput();
              }}
            >
              {keyVal}
            </button>
          );
        } else {
          return (
            <button
              type="button"
              onClick={() => {
                addInput(keyVal);
              }}
            >
              {keyVal}
            </button>
          );
        }
      })}
    </div>
  );
};

export default Keypad;
