const Art = () => {
  return (
    <div className="animate-fade h-full w-full font-mono flex flex-col items-center justify-evenly ">
      <div className=" text-4xl md:text-6xl">About My 3D Art</div>
      <div className=" text-base text-center md:text-2xl p-5 md:p-10">
        For the past 5 years, he has been a hobbyist in modeling, texturing and
        rendering 3D environments. For modeling and rendering, he uses Blender.
        For texturing, Photoshop and Mixer. My images and animations, can be
        viewed on my page on ArtStation.
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
