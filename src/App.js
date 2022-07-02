import Navbar from "./Components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
function App() {
  return (
    <div className="bg-zinc-900 w-screen h-screen flex flex-row z-10">
      <Navbar></Navbar>
      <Parallax
        pages={8}
        style={{
          marginTop: "3.5rem",
        }}
      >
        <ParallaxLayer offset={0}>
          <h2>Moon</h2>
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
    </div>
  );
}

export default App;
