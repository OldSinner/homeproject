import MoonImg from "../Assets/moon.png";

const Mars = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center h-full">
        <img src={MoonImg} className="w-1/4 "></img>
        <div className="text-4xl text-center">
          <h1>Maksymilian Przysiwek</h1>
          <h2 className="text-2xl">FullStack Developer</h2>
          <h2 className="text-2xl">3D Artist</h2>
          <h3 className="text-lg">
            The only thing that limits us is our imagination.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Mars;
