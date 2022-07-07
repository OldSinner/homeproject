const { useState, useEffect } = require("react");

const chars = [
  '"',
  "#",
  "$",
  "%",
  "&",
  ",",
  " ",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
];
const MatrixEffect = ({ text }) => {
  const [matrix, setMatrix] = useState("");

  useEffect(() => {
    generateMatrixEffect();
  }, []);

  const generateMatrixEffect = () => {
    let placeHolderMatrix = "";
    for (let i = 0; i < text.length; i++) {
      setMatrix((ps) => ps + chars[1]);
      placeHolderMatrix += chars[1];
    }
    console.log(placeHolderMatrix[0]);
    let j = 1;
    let inter = setInterval(() => {
      console.log("1");
      let newMatrix = placeHolderMatrix.split("");
      for (let i = 0; i < newMatrix.length; i++) {
        if (newMatrix[i] != text[i]) {
          newMatrix[i] = chars[j];
        }
      }
      j++;
      setMatrix(newMatrix.join(""));
      placeHolderMatrix = newMatrix.join("");
      if (placeHolderMatrix === text) {
        clearInterval(inter);
      }
    }, 20);
  };
  return <div>{matrix}</div>;
};

export default MatrixEffect;
