import React from "react";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(1);
  const countFunction = () => {
    for (let i = 1; i <= 10; i++) {
      setCount(count);
      count=count+1
    }
  };

  return <div>Count:{count}</div>;
};

export default Count;
