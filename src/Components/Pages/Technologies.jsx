const Technoglogies = () => {
  return (
    <div className="animate-fade h-full w-full font-mono flex flex-col items-center justify-evenly ">
      <div className=" text-4xl md:text-6xl">I’m currently into</div>
      <div className="flex flex-col justify-center text-lg md:text-2xl w-full">
        <div className="flex flex-row justify-between w-full ">
          <div className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
            Backend Infrastructure
          </div>
          <div className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
            Discord Bots
          </div>
        </div>
        <div className="flex flex-row justify-between w-full ">
          <div className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
            Artificial Neural Systems
          </div>
          <div className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
            Machine Learning
          </div>
        </div>
        <div className="flex flex-row justify-between w-full ">
          <div className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
            Web Development
          </div>
          <div className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
            Algorithms
          </div>
        </div>
        <div className="flex flex-row justify-between w-full ">
          <div className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
            Networks
          </div>
          <div className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
            Physics
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technoglogies;
