import Navbar from "./Components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Moon from "./Components/Moon";
import stars from "./Assets/stars.jpg";
import grass from "./Assets/grass.png";
import astro from "./Assets/astro.webp";
import iss from "./Assets/iss.png";

import "./App.css";
import Skills from "./Components/Skills";
import About from "./Components/About";
function App() {
  return (
    <>
      <div className="w-full h-full flex flex-column m-0 overflow-clip text-white">
        <Parallax
          pages={6}
          className=" w-full relative no-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          <ParallaxLayer
            offset={0}
            factor={7}
            speed={0.1}
            // style={{ backgroundImage: `url(${stars})` }}
          >
            <img src={stars} className="h-full object-cover"></img>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5} factor={1}>
            <Moon></Moon>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.9} factor={1.5}>
            <div className="ml-48  flex items-center">
              <img src={astro} className="w-1/2 md:ml-96 md:w-1/4" />
            </div>
          </ParallaxLayer>
          {/* Icons */}

          <ParallaxLayer offset={1} speed={0.3} factor={1}>
            <About />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.2}
            speed={0.7}
            factor={0.5}
            className="text-4xl"
          >
            <Skills />
          </ParallaxLayer>
          <ParallaxLayer
            offset={5.1}
            factor={1}
            speed={0.4}
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
