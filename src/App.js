import Navbar from "./Components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Moon from "./Components/Moon";
import "./App.css";
function App() {
  return (
    <>
      <div className="w-full h-full flex flex-column m-0 overflow-clip text-white">
        <Parallax
          pages={8}
          className="bg-zinc-900 w-full relative no-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          <ParallaxLayer
            offset={0}
            speed={0.3}
            factor={4}
            sticky={{ start: 0, end: 1.5 }}
            style={{}}
          >
            <Moon></Moon>
          </ParallaxLayer>
          <ParallaxLayer offset={2}>
            <h2>about</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={4}>
            <h2>proj</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={6}>
            <h2>contact</h2>
          </ParallaxLayer>
        </Parallax>
        <Navbar></Navbar>
      </div>
    </>
  );
}

export default App;
