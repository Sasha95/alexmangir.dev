import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
};

export const Drawer = ({ isOpen, setOpen, children }: Props) => {
  console.log(isOpen);

  return (
    <div>
      <main
        className={classNames(
          "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out",
          isOpen
            ? "transition-opacity opacity-100"
            : "bg-opacity-0 delay-400 duration-500 -translate-y-full"
        )}
      >
        <section
          className={classNames(
            "w-screen top-0 absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform",
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
