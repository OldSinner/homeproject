import { faker } from "@faker-js/faker";

const Art = () => {
  return (
    <div className="animate-fade h-full w-full font-mono flex flex-col items-center justify-evenly ">
      <div className=" text-4xl md:text-6xl">About My 3D Art</div>
      <div className=" text-base text-center md:text-2xl p-5 md:p-10">
        {faker.lorem.sentences(17)}
      </div>
      <div className=" text-base text-center md:text-2xl p-5 md:p-10">
        <a
          className="border-2 p-2 rounded-full border-black dark:border-white dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black transition-all"
          href="https://www.artstation.com/antypatia"
        >
          See My Works
        </a>
      </div>
    </div>
  );
};
export default Art;
