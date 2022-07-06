import MoonImg from "../Assets/moon.png";

const Mars = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly items-center h-full">
        <img src={MoonImg} className="w-9/12 md:w-1/4  "></img>
        <div className="text-2xl md:text-4xl text-center rounded-lg md:bg-gray-800/80 p-2 border-gray-400 border-2 mr-5 ml-5">
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
