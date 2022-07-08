import {
  SiSteam,
  SiGmail,
  SiDiscord,
  SiLinkedin,
  SiGithub,
  SiArtstation,
} from "react-icons/si";
const Contact = () => {
  return (
    <div className=" h-full w-full font-mono flex flex-col items-center justify-evenly ">
      <div className=" text-4xl md:text-6xl">Contact Me</div>
      <div className="p-5 text-center text-base md:text-2xl flex flex-col justify-center">
        <a
          href="https://www.linkedin.com/in/maksymilian-przysiwek-754752224/"
          className="flex flex-row items-center justify-center w-full hover:scale-125 p-5 transition-all"
        >
          <SiLinkedin className="mr-5" />

          <div className="">Maksymilian Przysiwek</div>
        </a>

        <a
          href="mailto:maksymilian.przysiwek@gmail.com"
          className="flex flex-row items-center justify-center w-full hover:scale-125 p-5 transition-all"
        >
          <SiGmail className="mr-5" />

          <div className="">maksymilian.przysiwek@gmail.com</div>
        </a>
        <a
          href="https://www.artstation.com/antypatia"
          className="flex flex-row items-center justify-center w-full hover:scale-125 p-5 transition-all"
        >
          <SiArtstation className="mr-5" />

          <div className="">Maksymilian Przysiwek</div>
        </a>
        <a
          href="https://github.com/OldSinner"
          className="flex flex-row items-center justify-center w-full hover:scale-125 p-5 transition-all"
        >
          <SiGithub className="mr-5" />

          <div className="">OldSinner</div>
        </a>
        <div className="hover:scale-125 p-5 transition-all flex flex-row items-center justify-center">
          <SiDiscord className="mr-5" />
          <div>OldSinner#8240</div>
        </div>

        <a
          href="https://steamcommunity.com/id/AntyPatia/"
          className="flex flex-row items-center justify-center w-full hover:scale-125 p-5 transition-all"
        >
          <SiSteam className="mr-5" />

          <div className="">OldSinner</div>
        </a>
      </div>
    </div>
  );
};
export default Contact;
