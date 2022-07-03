import Navbar from "./Components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Moon from "./Components/Moon";
import stars from "./Assets/stars.jpg";
import grass from "./Assets/grass.png";
import astro from "./Assets/astro.webp";

import "./App.css";
import About from "./Components/About";
import ProjectTemplate, {
  TechStack,
} from "./Components/Projects/ProjectTemplate";
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

          <ParallaxLayer offset={1} speed={1} factor={1}>
            <About />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5} factor={1}>
            <h1 className="text-center text-4xl md:-mb-20">Projects</h1>
          </ParallaxLayer>

          <ParallaxLayer offset={2.1} speed={0.5} factor={1}>
            <ProjectTemplate
              title={"Typescript Physical Engine"}
              backdrop="bg-ph"
              techStack={
                <>
                  <TechStack>TS</TechStack>
                  <TechStack>p5.js</TechStack>
                </>
              }
            >
              <h2 className="p-5">
                Physical engine showing basic physical laws in two-dimensional
                space inside the canvas.
              </h2>
            </ProjectTemplate>
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
