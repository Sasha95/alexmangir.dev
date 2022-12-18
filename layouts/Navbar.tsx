import { Drawer } from "@/components/Drawer";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center mt-6">
      <div className="flex items-center mr-auto">
        <h2 className="font-bold lg:text-2xl sm:text-xl text-lg leading-7 tracking-widest">
          alex
        </h2>
        <h3 className="lg:text-2xl sm:text-xl text-lg leading-7 tracking-widest">
          mangir
        </h3>
      </div>
      <div className="items-center hidden md:flex">
        <h2 className="text-2xl md:text-xl lg:text-2xl font-normal mx-11 md:mx-4 lg:mx-5 xl:mx-11 cursor-pointer hover:text-blue">
          About
        </h2>
        <h2 className="text-2xl md:text-xl lg:text-2xl font-normal cursor-pointer  hover:text-blue">
          Passions
        </h2>
        <h2 className="text-2xl md:text-xl lg:text-2xl font-normal mx-11 md:mx-4 lg:mx-5 xl:mx-11 cursor-pointer  hover:text-blue">
          Portfolio
        </h2>
        <button className="rounded-lg bg-cornflower py-2 px-4 lg:py-2.5 lg:px-5 font-semibold text-white text-2xl md:text-base lg:text-2xl cursor-pointer hover:bg-blue">
          Contact me
        </button>
      </div>
      <Drawer isOpen={isOpen} setOpen={setOpen}>
        <div>
          <h2 className="text-2xl md:text-xl lg:text-2xl font-normal mx-11 md:mx-4 lg:mx-5 xl:mx-11 cursor-pointer hover:text-blue">
            About
          </h2>
          <h2 className="text-2xl md:text-xl lg:text-2xl font-normal cursor-pointer  hover:text-blue">
            Passions
          </h2>
          <h2 className="text-2xl md:text-xl lg:text-2xl font-normal mx-11 md:mx-4 lg:mx-5 xl:mx-11 cursor-pointer  hover:text-blue">
            Portfolio
          </h2>
          <button className="rounded-lg bg-cornflower py-2 px-4 lg:py-2.5 lg:px-5 font-semibold text-white text-2xl md:text-base lg:text-2xl cursor-pointer hover:bg-blue">
            Contact me
          </button>
        </div>
      </Drawer>
      <Image
        src={siteMetadata.burgerIcon}
        alt="burger"
        width={25}
        height={25}
        className="md:hidden"
        onClick={() => setOpen(true)}
      />
    </nav>
  );
};
