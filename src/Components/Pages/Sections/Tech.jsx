import { useEffect } from "react";
import { useState } from "react";
import { Token } from "../../Elements/Token";
import axios from "axios";
import MatrixEffect from "../../Elements/MatrixEffect";
import Counter from "../../Elements/Counter";

const LangData = {
  "C#": 0,
  JavaScript: 0,
  TypeScript: 0,
  HTML: 0,
};
const Tech = () => {
  const [C, setC] = useState(0);
  const [Ts, setTs] = useState(0);
  const [Js, setJs] = useState(0);
  const [Ht, setHt] = useState(0);

  const config = {
    headers: { Authorization: `Bearer ${Token}` },
  };
  async function fetchData() {
    let res = await axios.get(
      "https://api.github.com/users/OldSinner/repos",
      config
    );
    for (let i = 0; i < res.data.length; i++) {
      let response = await axios.get(res.data[i].languages_url, config);

      for (var prop in LangData) {
        if (response.data.hasOwnProperty(prop)) {
          LangData[prop] += response.data[prop];
        }
      }
    }
    console.log("Everything is loaded");
    setC(LangData["C#"]);
    setTs(LangData["TypeScript"]);
    setJs(LangData["JavaScript"]);
    setHt(LangData["HTML"]);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5 flex flex-col md:text-2xl m-5">
      <div className="text-2xl md:text-4xl"> CodeStats:</div>
      <div className="flex flex-row">
        C#: <Counter value={C} afterText={"%"}></Counter>
      </div>
      <div className="flex flex-row">
        TypeScript: <Counter value={Ts} afterText={"%"}></Counter>
      </div>
      <div className="flex flex-row">
        JavaScript: <Counter value={Js} afterText={"%"}></Counter>
      </div>
      <div className="flex flex-row">
        HTML: <Counter value={Ht} afterText={"%"}></Counter>
      </div>
    </div>
  );
};
export default Tech;
