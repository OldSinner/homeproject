import { useEffect } from "react";
import { useState } from "react";
const Counter = ({ value, afterText, timeDif = 10, space }) => {
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
  if (space) return <div>{count + " " + afterText}</div>;
  else return <div>{count + afterText}</div>;
};

export default Counter;
