import "./App.css";
import { useRef, useState } from "react";
import LaunchPage from "./Components/LaunchPage";
import DarkMode from "./Components/DarkMode";
import Contents from "./Components/Contents";
import AboutMe from "./Components/AboutMe";

function App() {
  const [dark, setdark] = useState(true);
  const setState = () => {
    setdark(!dark);
  };
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <DarkMode onClick={setState} state={dark}></DarkMode>
      <div className="h-screen overflow-y-scroll snap snap-y snap-mandatory dark:bg-black dark:text-white text-black dark:text-white">
        <div className="snap-center w-full h-full ">
          <LaunchPage />
        </div>
        <div className="snap-center w-full h-full ">
          <Contents />
        </div>
        <div className="snap-center w-full h-full ">
          <AboutMe />
        </div>
      </div>
    </div>
  );
}

export default App;
