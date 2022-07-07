import "../../App.css";
const LaunchPage = () => {
  return (
    <div className=" h-full w-full font-mono flex flex-col items-center justify-evenly animate-longfade">
      <div className="  ">
        <div className=" text-center   p-10 ">
          <div className=" text-4xl md:text-6xl p-1">MAKSYMILIAN PRZYSIWEK</div>
          <div className=" text-lg md:text-4xl p-1">
            FullStack Developer <br></br> 3D Artist
          </div>
          <div className=" text-sm md:text-2xl p-1">
            Simplicity is the key to victory
          </div>
        </div>
      </div>
      <div className="">
        <div className=" border-2 rounded-full border-black dark:border-white p-2 animate-bounce ">
          Scroll For More
        </div>
      </div>
    </div>
  );
};
export default LaunchPage;
