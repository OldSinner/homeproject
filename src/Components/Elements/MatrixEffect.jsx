const { useState, useEffect } = require("react");

const chars = [
  '"',
  "$",
  "%",
  "&",
  ",",
  "-",
  ".",
  "/",
  ":",

  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "0",
  " ",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  " ",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
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
  "#",
];
const MatrixEffect = ({ text }) => {
  const [matrix, setMatrix] = useState("");

  useEffect(() => {
    generateMatrixEffect();
  }, [text]);

  const generateMatrixEffect = () => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let indexes = [];
    let placeHolderMatrix = "";
    for (let i = 0; i < text.length; i++) {
      placeHolderMatrix += chars[1];
      indexes.push(getRandomInt(0, 15));
      setMatrix((ps) => ps + indexes[i]);
    }
    let j = 1;
    let inter = setInterval(() => {
      let newMatrix = placeHolderMatrix.split("");
      for (let i = 0; i < newMatrix.length; i++) {
        if (newMatrix[i] != text[i]) {
          newMatrix[i] = chars[indexes[i]];
        }
      }
      for (let j = 0; j < indexes.length; j++) {
        indexes[j]++;
      }
      setMatrix(newMatrix.join(""));
      placeHolderMatrix = newMatrix.join("");
      if (placeHolderMatrix === text) {
        clearInterval(inter);
      }
    }, 40);
  };
  return <div>{matrix}</div>;
};

export default MatrixEffect;
