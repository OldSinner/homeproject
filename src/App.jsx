import Navbar from "./Components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Moon from "./Components/Moon";
import stars from "./Assets/stars.jpg";
import grass from "./Assets/grass.png";
import astro from "./Assets/astro.webp";
import { SiGithub } from "react-icons/si";
import "./App.css";
import About from "./Components/About";
import ProjectTemplate, {
  TechStack,
} from "./Components/Projects/ProjectTemplate";

const Projects = [
  {
    title: "Typescript Physical Engine",
    techStack: ["TS", "p5.js"],
    links: [
      {
        icon: <SiGithub></SiGithub>,
        link: "https://github.com/OldSinner/TSPhysicsPlayground",
      },
    ],
    backdrop: "bg-ph",
    describe:
      "Physical engine showing basic physical laws in two-dimensional space inside the canvas.",
  },
];

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

          <ParallaxLayer offset={0} speed={1.5} factor={1}>
            <Moon></Moon>
          </ParallaxLayer>

          <ParallaxLayer offset={0.9} speed={1} factor={1}>
            <About />
          </ParallaxLayer>
          <ParallaxLayer offset={1.4} speed={0.7} factor={1}>
            <h1 className="text-center text-4xl md:-mb-20">Projects</h1>
          </ParallaxLayer>

          <ParallaxLayer offset={1.5} speed={0.7} factor={1}>
            {Projects.map((project) => (
              <ProjectTemplate
                title={project.title}
                backdrop={project.backdrop}
                techStack={
                  <>
                    {project.techStack.map((tech) => (
                      <TechStack>{tech}</TechStack>
                    ))}
                  </>
                }
              >
                <h2 className="p-5">{project.describe}</h2>
              </ProjectTemplate>
            ))}
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
