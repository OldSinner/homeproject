import "./Styles/styles.css";
import Face from "./../Assets/face.jpg";
const About = () => {
  return (
    <>
      <h1 className="text-center text-4xl -mb-10">About Me</h1>
      <div className="flex  flex-col  justify-center">
        <div className=" flex justify-center items-center">
          <img
            src={Face}
            className="w-1/2 h-1/2 md:w-1/6 md:h-1/6  object-cover rounded-full  mt-20 border-4 border-white"
          ></img>
        </div>
        <div className=" text-center text-shadow m-5 text-base md:text-2xl md:ml-48 md:mr-48 flex justify-center  bg-black/50 p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tellus eros, imperdiet eget diam in, malesuada hendrerit odio. Quisque
          convallis vitae turpis a ultricies. Donec a velit nibh. Donec urna
          lorem, consectetur ac congue quis, fermentum in risus. Donec sed
          varius nisi. Pellentesque eget lacus nulla. Suspendisse sit amet
          rutrum dolor. Etiam augue eros, vulputate a tempus in, venenatis et
          leo. Pellentesque suscipit enim nec nisi posuere, semper ullamcorper
          leo interdum. In nec tempor nisl, a tempus nulla. Nulla facilisi.
          Aenean a lorem convallis, scelerisque massa eu, faucibus massa. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Phasellus consectetur fermentum rhoncus.
        </div>
      </div>
    </>
  );
};
export default About;
