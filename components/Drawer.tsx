import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
};

export const Drawer = ({ isOpen, setOpen, children }: Props) => {
  return (
    <div>
      <main
        className={classNames(
          "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 bg-transparent inset-0 transform ease-in-out",
          isOpen
            ? "transition-opacity opacity-100"
            : "transition-transform duration-500 -translate-y-full bg-opacity-0"
        )}
      >
        <section
          className={classNames(
            "w-screen top-0 absolute bg-white shadow-xl duration-500 ease-in-out transition-all transform",
            isOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <article className="relative w-screen flex flex-col">
            {children}
          </article>
        </section>
        <section
          className="w-screen h-full cursor-pointer"
          onClick={() => {
            setOpen(false);
          }}
        ></section>
      </main>
    </div>
  );
};
