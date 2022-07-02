import Navbar from "./Components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Moon from "./Components/Moon";
import stars from "./Assets/stars.jpg";
import grass from "./Assets/grass.png";

import {
  SiTypescript,
  SiCsharp,
  SiJavascript,
  SiPhp,
  SiAdobephotoshop,
  SiBlender,
  SiCplusplus,
  SiDotnet,
  SiGithub,
  SiJquery,
} from "react-icons/si";
import "./App.css";
function App() {
  const icons = [
    SiTypescript,
    SiCsharp,
    SiJavascript,
    SiPhp,
    SiAdobephotoshop,
    SiBlender,
    SiCplusplus,
    SiDotnet,
    SiGithub,
    SiJquery,
  ];
  console.log(icons);
  return (
    <>
      <div className="w-full h-full flex flex-column m-0 overflow-clip text-white">
        <Parallax
          pages={4}
          className=" w-full relative no-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          <ParallaxLayer
            offset={0}
            factor={5}
            speed={0.1}
            // style={{ backgroundImage: `url(${stars})` }}
          >
            <img src={stars} className="h-full object-cover"></img>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5} factor={1}>
            <Moon></Moon>
          </ParallaxLayer>
          {/* Icons */}
          {icons.map((icon, index) => (
            <ParallaxLayer
              offset={0.9 + index / 100}
              speed={0.3 + index / 10}
              factor={0.5}
              className="text-4xl"
            >
              <div style={{ marginLeft: 10 + index * 100 }}>{icon.apply()}</div>
            </ParallaxLayer>
          ))}

          <ParallaxLayer offset={1.5} speed={0.5}>
            <h2>about</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1}>
            <h2>proj</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={1}>
            <h2>contact</h2>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            factor={1}
            speed={0.1}
            // style={{ backgroundImage: `url(${stars})` }}
          >
            <img src={grass} className="h-full w-full object-cover"></img>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default App;
