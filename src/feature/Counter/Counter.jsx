import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("value");
  function decrement() {
    setCount(count - 1);
  }
  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <hr />
      <button onClick={decrement} value="-">
        -
      </button>
      <h2>{count}</h2>
      <button onClick={increment} value="+">
        +
      </button>
    </>
  );
}

export default Counter;
