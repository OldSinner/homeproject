import MoonImg from "../Assets/moon.png";
const Moon = () => {
  return (
    <div className="flex flex-row justify-evenly items-center h-full">
      <img src={MoonImg} className="w-1/5"></img>
      <div className="text-2xl text-center">
        <h1>Maksymilian Przysiwek</h1>
        <h2 className="text-lg">FullStack Developer</h2>
      </div>
    </div>
  );
};

export default Moon;
