import "./App.css";
import { useRef, useState } from "react";
import LaunchPage from "./Components/Pages/LaunchPage";
import DarkMode from "./Components/Pages/DarkMode";
import Contents from "./Components/Pages/Contents";
import AboutMe from "./Components/Pages/AboutMe";
import Code from "./Components/Pages/Code";
import { Waypoint } from "react-waypoint";
import Technoglogies from "./Components/Pages/Technologies";

function App() {
  const [dark, setdark] = useState(true);
  const [showContent, setshowContent] = useState(false);
  const [showCode, setshowCode] = useState(false);
  const [showAboutMe, setshowAboutMe] = useState(false);
  const [showTech, setshowTech] = useState(false);

  const setState = () => {
    setdark(!dark);
  };
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <DarkMode onClick={setState} state={dark}></DarkMode>
      <div className="h-screen overflow-y-scroll snap snap-y snap-mandatory dark:bg-black dark:text-white text-black dark:text-white transition-all duration-1000">
        <section className="snap-center w-full h-full " id={"Home"}>
          <LaunchPage />
        </section>

        <section className="snap-center w-full h-full mt-10" id={"Content"}>
          <Waypoint
            onEnter={() => {
              setshowContent(true);
            }}
          />

          {showContent ? <Contents /> : null}
        </section>
        <section className="snap-center w-full h-full mt-10" id={"About"}>
          <Waypoint
            onEnter={() => {
              setshowAboutMe(true);
            }}
          />
          {showAboutMe ? <AboutMe /> : null}
        </section>
        <section className="snap-center w-full h-full mt-10" id={"Code"}>
          <Waypoint
            onEnter={() => {
              setshowCode(true);
            }}
          />
          {showCode ? <Code /> : null}
        </section>
        <section className="snap-center w-full h-full mt-10" id={"Tech"}>
          <Waypoint
            onEnter={() => {
              setshowTech(true);
            }}
          />
          {showTech ? <Technoglogies /> : null}
        </section>
      </div>
    </div>
  );
}

export default App;
