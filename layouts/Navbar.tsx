export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-6">
      <div className="flex items-center">
        <h2 className="font-bold text-2xl tracking-widest">alex</h2>
        <h3 className="text-2xl tracking-widest">mangir</h3>
      </div>
      <div className="flex items-center">
        <h2 className="text-2xl font-normal mx-11 cursor-pointer hover:text-blue">
          About
        </h2>
        <h2 className="text-2xl font-normal cursor-pointer  hover:text-blue">
          Passions
        </h2>
        <h2 className="text-2xl font-normal mx-11 cursor-pointer  hover:text-blue">
          Portfolio
        </h2>
        <button className="rounded-lg bg-cornflower py-2.5 px-[18px] font-semibold text-white text-2xl cursor-pointer  hover:bg-blue">
          Contact me
        </button>
      </div>
    </nav>
  );
};
