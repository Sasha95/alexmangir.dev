import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};
export const Card = ({ children, title }: Props) => {
  return (
    <div className="bg-white shadow-3xl rounded-xl py-6 px-14 max-w-[358px] max-h-[269px] h-full w-full flex flex-col justify-between items-center relative">
      <h2 className="text-2xl font-medium">{title}</h2>
      {children}
      <button className="rounded-lg bg-cornflower p-3 font-semibold text-white text-2xl cursor-pointer text-xs hover:bg-blue">
        Click to see more
      </button>
    </div>
  );
};
