export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-6">
      <div className="flex items-center">
        <h2 className="font-bold xl:text-2xl sm:text-xl text-lg leading-7 tracking-widest">
          alex
        </h2>
        <h3 className="xl:text-2xl sm:text-xl text-lg leading-7 tracking-widest">
          mangir
        </h3>
      </div>
      <div className="items-center hidden md:flex">
        <h2 className="text-2xl md:text-xl font-normal mx-11 md:mx-4 cursor-pointer hover:text-blue">
          About
        </h2>
        <h2 className="text-2xl md:text-xl font-normal cursor-pointer  hover:text-blue">
          Passions
        </h2>
        <h2 className="text-2xl md:text-xl font-normal mx-11 md:mx-4 cursor-pointer  hover:text-blue">
          Portfolio
        </h2>
        <button className="rounded-lg bg-cornflower py-2.5 px-[18px] font-semibold text-white text-2xl md:text-base cursor-pointer  hover:bg-blue">
          Contact me
        </button>
      </div>
    </nav>
  );
};
