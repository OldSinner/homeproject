const Contents = ({ handler }) => {
  return (
    <div className="animate-fade h-full w-full font-mono flex flex-col items-center justify-evenly ">
      <div className="text-center text-2xl md:text-4xl">
        Choose what interests you
      </div>
      <div className="flex flex-row justify-around w-3/4">
        <div className="flex flex-col">
          <div
            onClick={() => {
              handler(1);
            }}
            className="border-2 rounded-full border-black dark:border-white p-2 m-2 text-center dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black transition-all cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => {
              handler(2);
            }}
            className="border-2 rounded-full border-black dark:border-white p-2 m-2 text-center dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black transition-all cursor-pointer"
          >
            About me
          </div>
          <div
            onClick={() => {
              handler(4);
            }}
            className="border-2 rounded-full border-black dark:border-white p-2 m-2 text-center dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black transition-all cursor-pointer"
          >
            Interests
          </div>
        </div>
        <div className="flex flex-col">
          <div
            onClick={() => {
              handler(3);
            }}
            className="border-2 rounded-full border-black dark:border-white p-2 m-2 text-center dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black transition-all cursor-pointer"
          >
            Coding
          </div>
          <div
            onClick={() => {
              handler(5);
            }}
            className="border-2 rounded-full border-black dark:border-white p-2 m-2 text-center dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black transition-all cursor-pointer"
          >
            3D Art
          </div>
          <div
            onClick={() => {
              handler(6);
            }}
            className="border-2 rounded-full border-black dark:border-white p-2 m-2 text-center dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black transition-all cursor-pointer"
          >
            Contact Me
          </div>
        </div>
      </div>
      <div className="  text-2xl md:text-4xl">Or...</div>
      <div className=" border-2 rounded-full border-black dark:border-white p-2 animate-bounce">
        Scroll To Explore
      </div>
    </div>
  );
};

export default Contents;
