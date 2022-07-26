const Technoglogies = () => {
    return (
        <div className="animate-fade h-full w-full font-mono flex flex-col items-center justify-evenly ">
            <div className="text-center text-4xl md:text-6xl">
                I’m currently into
                <div className=" text-base md:text-2xl">(Click option to check my work)</div>
            </div>

            <div className="flex flex-col justify-center text-lg md:text-2xl w-full">
                <div className="flex flex-row justify-between w-full ">
                    <a
                        href="https://github.com/OldSinner/Microservices"
                        className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
                        Backend Infrastructure
                    </a>
                    <a
                        href="https://github.com/OldSinner/TypeGameEnigne"
                        className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
                        GameDev
                    </a>
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
                    <a
                        href="https://github.com/OldSinner/spacetracker"
                        className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
                        Web Development
                    </a>
                    <div className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
                        Algorithms
                    </div>
                </div>
                <div className="flex flex-row justify-between w-full ">
                    <div className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
                        Networks
                    </div>
                    <a
                        href="https://github.com/OldSinner/TSPhysicsPlayground"
                        className="p-2 w-1/2 text-center md:p-10 md:ml-40 md:mr-40 transition-all hover:scale-150 cursor-pointer">
                        Physics
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Technoglogies;
