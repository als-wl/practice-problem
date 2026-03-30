import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleDecrease = () => {
    setNumber(number - 1);
  };

  const handleFuncg = () => {
    setNumber(0);
  };
  return (
    <>
      <h5>카운트: {number}</h5>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleFuncg}>초기화</button>
      <button onClick={handleIncrease}>+1</button>
      <button>test</button>
    </>
  );
}

export default Counter;
