import MoonImg from "../Assets/moon.png";

const Mars = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center h-full">
        <img src={MoonImg} className="w-1/5 "></img>
        <div className="text-2xl text-center">
          <h1>Maksymilian Przysiwek</h1>
          <h2 className="text-lg">FullStack Developer</h2>
          <h2 className="text-lg">3D Artist</h2>
        </div>
      </div>
    </>
  );
};

export default Mars;
