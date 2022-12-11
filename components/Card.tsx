import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
};
export const Card = ({ children, title, className }: Props) => {
  return (
    <div
      className={classNames(
        "bg-white shadow-3xl rounded-xl pt-6 pb-5 sm:pt-9 sm:pb-6 md:py-3 xl:max-w-[358px] md:max-h-[164px] xl:max-h-[269px] sm:max-h-full sm:h-[301px] w-full flex flex-col justify-between items-center relative",
        className
      )}
    >
      <h2 className="text-2xl md:text-xl xs:leading-10 font-medium">{title}</h2>
      {children}
      <button className="rounded-lg bg-cornflower p-3 md:p-2 font-semibold text-white cursor-pointer text-xs md:text-[10px] hover:bg-blue">
        Click to see more
      </button>
    </div>
  );
};
