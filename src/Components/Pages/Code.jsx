import GitHubSections from "./Sections/GitHubSections";
import Tech from "./Sections/Tech";

const Code = () => {
  return (
    <div className=" h-full w-full font-mono flex flex-col items-center justify-evenly ">
      <div className=" text-4xl md:text-6xl">About My Coding</div>
      <div className="p-5 text-center text-base md:text-2xl">
        I focus my interest mainly around .NET and JS, but I am also no stranger
        to programming in Python, C or Java.
      </div>

      <div className="animate-fade text-center flex flex-col md:flex-row justify-around">
        <GitHubSections />
        <Tech />
      </div>
    </div>
  );
};
export default Code;
