import "../../App.css";
import MatrixEffect from "../Elements/MatrixEffect";
const LaunchPage = () => {
  return (
    <div className=" h-full w-full font-mono flex flex-col items-center justify-evenly animate-longfade">
      <div className="  ">
        <div className=" text-center   p-10 ">
          <div className=" text-4xl md:text-6xl p-1">
            <MatrixEffect text={"MAKSYMILIAN PRZYSIWEK"}></MatrixEffect>
          </div>
          <div className=" text-lg md:text-4xl p-1">
            <MatrixEffect text={"FullStack Developer"}></MatrixEffect>
            <MatrixEffect text={"3D Artist"}></MatrixEffect>
          </div>
          <div className=" text-sm md:text-2xl p-1">
            <MatrixEffect
              text={"            Simplicity is the key to victory"}
            ></MatrixEffect>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" border-2 rounded-full border-black dark:border-white p-2 animate-bounce ">
          <MatrixEffect text={"Scroll For More"}></MatrixEffect>
        </div>
      </div>
    </div>
  );
};
export default LaunchPage;
