import { useState } from 'react';
import './index.css';


function App() {
  const [input, setInput] = useState("");
  const calcBtns = [];
  const allBtns = [9, 8, 7, 6, 5, 4, 3, 2, 1,'.', 0, "%"]
  allBtns.forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="container">
      {" "}
      <div className="show-input">{input}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers child-grid">
        {/* clear button */}

        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>

        {/* AC Button */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>

      <div className="operations child-grid">
        {/* add button */}
        <button onClick={(e) => setInput(input + e.target.value)} value="+">
          +
        </button>

        {/* minus btn */}
        <button onClick={(e) => setInput(input + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="*">
          {" "}
          *
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="/">
          {" "}
          /
        </button>

        {/* Equals To btn */}
        <button
          onClick={(e) => {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
