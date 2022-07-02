const Navbar = (props) => {
  return (
    <div className="absolute bg-zinc-800 w-screen h-14 flex flex-row justify-between items-center">
      <div className="ml-16 m-2">
        <ul className="text-2xl text-violet-800">
          <li className="float-left m-4">Home</li>
          <li className="float-left m-4">About</li>
          <li className="float-left m-4">Projects</li>
          <li className="float-left m-4">Contact</li>
        </ul>
      </div>
      <div className="m-2"></div>
    </div>
  );
};

export default Navbar;
