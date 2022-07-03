import "./Styles/styles.css";
import Face from "./../Assets/face.jpg";
const About = () => {
  return (
    <>
      <h1 className="text-center text-4xl md:-mb-10">About Me</h1>
      <div className="flex justify-center md:justify-around flex-col md:flex-row">
        <div className="md:w-1/2 md:ml-20 flex justify-center items-center">
          <img
            src={Face}
            className="w-1/4 h-1/4 md:w-auto md:h-1/2 object-cover rounded-full  m-5"
          ></img>
        </div>
        <div className="md:w-1/2 text-center md:mr-20 text-shadow m-5 text-2xl flex items-center">
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
