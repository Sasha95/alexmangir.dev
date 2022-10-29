export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-6">
      <div className="flex items-center">
        <h2 className="text-navy font-bold text-2xl tracking-widest">alex</h2>
        <h3 className="text-darkCornflower text-2xl tracking-widest">mangir</h3>
      </div>
      <div className="flex items-center">
        <h2 className="text-2xl font-normal mx-11 cursor-pointer hover:text-cornflower">
          About
        </h2>
        <h2 className="text-2xl font-normal cursor-pointer  hover:text-cornflower">
          Passions
        </h2>
        <h2 className="text-2xl font-normal mx-11 cursor-pointer  hover:text-cornflower">
          Portfolio
        </h2>
        <button className="rounded-lg bg-cornflower py-2.5 px-[18px] font-semibold text-white text-2xl cursor-pointer  hover:bg-darkCornflower">
          Contact me
        </button>
      </div>
    </nav>
  );
};
