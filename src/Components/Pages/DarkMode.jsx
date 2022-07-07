import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
const DarkMode = ({ onClick, state }) => {
  return (
    <div className="text-black dark:text-white absolute text-3xl p-5 animate-fade">
      {!state ? (
        <BsMoonFill onClick={onClick} />
      ) : (
        <BsFillSunFill onClick={onClick} />
      )}
    </div>
  );
};

export default DarkMode;
