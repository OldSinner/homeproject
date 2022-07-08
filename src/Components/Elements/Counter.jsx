import { useEffect } from "react";
import { useState } from "react";
const Counter = ({
  value,
  afterText,
  timeDif = 10,
  space,
  step = 1,
  decimals = 0,
}) => {
  if (afterText == undefined) afterText = "";
  const [count, setCount] = useState(0);
  let currentValue = 0;
  const startValue = () => {
    var interval = setInterval(() => {
      if (currentValue < value) {
        setCount((prevState) => prevState + step);
        currentValue += step;
      } else {
        clearInterval(interval);
      }
    }, timeDif);
  };

  useEffect(() => {
    startValue();
  }, [value]);
  if (space) return <div>{count.toFixed(decimals) + " " + afterText}</div>;
  else return <div>{count.toFixed(decimals) + afterText}</div>;
};

export default Counter;
