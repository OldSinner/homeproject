import "./App.css";
import { useRef, useState } from "react";
import LaunchPage from "./Components/Pages/LaunchPage";
import DarkMode from "./Components/Pages/DarkMode";
import Contents from "./Components/Pages/Contents";
import AboutMe from "./Components/Pages/AboutMe";
import Code from "./Components/Pages/Code";
import { Waypoint } from "react-waypoint";
import Technoglogies from "./Components/Pages/Technologies";
import Art from "./Components/Pages/Art";
import Contact from "./Components/Pages/Contact";

function App() {
  const [dark, setdark] = useState(true);
  const [showContent, setshowContent] = useState(false);
  const [showCode, setshowCode] = useState(false);
  const [showAboutMe, setshowAboutMe] = useState(false);
  const [showTech, setshowTech] = useState(false);
  const [showArt, setshowArt] = useState(false);
  const [showContact, setshowContact] = useState(false);
  //
  const homeRef = useRef();
  const aboutRef = useRef();
  const codeRef = useRef();
  const techRef = useRef();
  const artRef = useRef();
  const contactRef = useRef();
  //
  const scrollHandler = (pos) => {
    switch (pos) {
      case 1:
        homeRef.current.scrollIntoView();
        break;
      case 2:
        aboutRef.current.scrollIntoView();
        break;
      case 3:
        codeRef.current.scrollIntoView();
        break;
      case 4:
        techRef.current.scrollIntoView();
        break;
      case 5:
        artRef.current.scrollIntoView();
        break;
      case 6:
        contactRef.current.scrollIntoView();
        break;
      default:
        homeRef.current.scrollIntoView();
        break;
    }
  };
  const setState = () => {
    setdark(!dark);
  };
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <DarkMode onClick={setState} state={dark}></DarkMode>
      <div className="h-screen overflow-y-scroll snap snap-y snap-mandatory dark:bg-black dark:text-white text-black dark:text-white transition-all duration-1000">
        <section
          ref={homeRef}
          className="snap-center w-full h-full "
          id={"Home"}
        >
          <LaunchPage />
        </section>

        <section className="snap-center w-full h-full mt-10" id={"Content"}>
          <Waypoint
            onEnter={() => {
              setshowContent(true);
            }}
          />

          {showContent ? <Contents handler={scrollHandler} /> : null}
        </section>
        <section
          ref={aboutRef}
          className="snap-center w-full h-full mt-10"
          id={"About"}
        >
          <Waypoint
            onEnter={() => {
              setshowAboutMe(true);
            }}
          />
          {showAboutMe ? <AboutMe /> : null}
        </section>
        <section
          ref={codeRef}
          className="snap-center w-full h-full mt-10"
          id={"Code"}
        >
          <Waypoint
            onEnter={() => {
              setshowCode(true);
            }}
          />
          {showCode ? <Code /> : null}
        </section>
        <section
          ref={techRef}
          className="snap-center w-full h-full mt-10"
          id={"Tech"}
        >
          <Waypoint
            onEnter={() => {
              setshowTech(true);
            }}
          />
          {showTech ? <Technoglogies /> : null}
        </section>
        <section
          ref={artRef}
          className="snap-center w-full h-full mt-10"
          id={"Tech"}
        >
          <Waypoint
            onEnter={() => {
              setshowArt(true);
            }}
          />
          {showArt ? <Art /> : null}
        </section>
        <section
          ref={contactRef}
          className="snap-center w-full h-full mt-10"
          id={"Tech"}
        >
          <Waypoint
            onEnter={() => {
              setshowContact(true);
            }}
          />
          {showContact ? <Contact /> : null}
        </section>
      </div>
    </div>
  );
}

export default App;
