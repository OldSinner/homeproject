import { useEffect } from "react";
import { useState } from "react";
const Counter = ({ value, afterText, timeDif = 10 }) => {
  if (afterText == undefined) afterText = "";
  const [count, setCount] = useState(0);
  let currentValue = 0;
  const startValue = () => {
    var interval = setInterval(() => {
      if (currentValue < value) {
        setCount((prevState) => prevState + 1);
        currentValue++;
      } else {
        clearInterval(interval);
      }
    }, timeDif);
  };

  useEffect(() => {
    startValue();
  }, [value]);
  return <div>{count + " " + afterText}</div>;
};

export default Counter;
