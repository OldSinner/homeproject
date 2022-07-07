import MatrixEffect from "../Elements/MatrixEffect";
import GitHubSections from "./Sections/GitHubSections";

const Code = () => {
  return (
    <div className="animate-fade h-full w-full font-mono flex flex-col items-center justify-evenly ">
      <div className=" text-4xl md:text-6xl">About My Coding</div>
      <div className="flex flex-col md:flex-row justify-around">
        <GitHubSections />
        <MatrixEffect text={"Przybierzeli Do betlejem"} />
      </div>
    </div>
  );
};
export default Code;
