import PlanetMenu from "./PlanetMenu";

const Contents = () => {
  return (
    <div className="animate-fade h-full w-full font-mono flex flex-col items-center justify-evenly ">
      <PlanetMenu />
      <div className="  text-4xl">Or...</div>
      <div className=" border-2 rounded-full border-black dark:border-white p-2 animate-bounce">
        Scroll To Explore
      </div>
    </div>
  );
};

export default Contents;
// What interests you?
