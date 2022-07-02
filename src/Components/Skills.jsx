import {
  SiTypescript,
  SiCsharp,
  SiJavascript,
  SiPhp,
  SiAdobephotoshop,
  SiBlender,
  SiCplusplus,
  SiDotnet,
  SiGithub,
  SiJquery,
  SiWindowsterminal,
  SiWindows,
  SiUnity,
  SiSass,
  SiVisualstudiocode,
  SiNodedotjs,
  SiMdnwebdocs,
  SiMysql,
} from "react-icons/si";
const Skills = () => {
  const icons = [
    SiTypescript,
    SiCsharp,
    SiJavascript,
    SiPhp,
    SiAdobephotoshop,
    SiBlender,
    SiCplusplus,
    SiDotnet,
    SiGithub,
    SiJquery,
    SiWindowsterminal,
    SiWindows,
    SiUnity,
    SiSass,
    SiVisualstudiocode,
    SiNodedotjs,
    SiMdnwebdocs,
    SiMysql,
  ];
  return (
    <div>
      <h1 className="text-center">Skills and interests</h1>
      <div className="grid grid-cols-fill-40 content-center justify-center w-full">
        {icons.map((icon) => (
          <div className="self-centers flex justify-center mt-5">
            {icon.apply()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
