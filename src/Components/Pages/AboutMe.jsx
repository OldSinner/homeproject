import { faker } from "@faker-js/faker";
const AboutMe = () => {
  return (
    <div className="animate-fade h-full w-full font-mono flex flex-col items-center justify-evenly ">
      <div className=" text-4xl md:text-6xl">Who am I?</div>
      <div className=" text-base text-center md:text-2xl p-5 md:p-10">
        {faker.lorem.sentences(17)}
      </div>
    </div>
  );
};
export default AboutMe;
