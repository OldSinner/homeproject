import "./App.css";
import { useRef, useState } from "react";
import LaunchPage from "./Components/LaunchPage";
import DarkMode from "./Components/DarkMode";

function App() {
  const [dark, setdark] = useState(true);
  const setState = () => {
    setdark(!dark);
  };
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <DarkMode onClick={setState} state={dark}></DarkMode>
      <div className="h-screen overflow-y-scroll snap snap-y snap-mandatory">
        <div className="snap-center w-full h-full ">
          <LaunchPage ok={"mroe ok"} />
        </div>
        <div className="snap-center w-full h-full ">
          <LaunchPage ok={"ok"} />
        </div>
      </div>
    </div>
  );
}

export default App;
