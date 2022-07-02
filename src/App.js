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
  SiWindowsterminal,
  SiWindows,
  SiUnity,
  SiSass,
  SiVisualstudiocode,
  SiNodedotjs,
  SiMdnwebdocs,
  SiMysql,
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
    SiWindowsterminal,
    SiWindows,
    SiUnity,
    SiSass,
    SiVisualstudiocode,
    SiNodedotjs,
    SiMdnwebdocs,
    SiMysql,
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
          <ParallaxLayer
            offset={1}
            speed={0.3}
            factor={0.5}
            className="text-4xl"
          >
            <div>
              <h1 className="text-center">Skills and interests</h1>
              <div className="grid grid-cols-fill-40 content-center justify-center w-full">
                {icons.map((icon) => (
                  <div className="self-centers flex justify-center mt-5">
                    {icon.apply()}
                  </div>
                ))}
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.5}>
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
