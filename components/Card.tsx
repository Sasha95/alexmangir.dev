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
        "bg-white shadow-3xl rounded-xl pt-7 pb-6 sm:pt-9 sm:pb-6 md:py-3 lg:max-h-fit xl:max-w-[358px] md:max-h-[164px] xl:max-h-[269px] lg:h-[217px] lg:w-[270px] xl:w-[358px] xl:h-[289px] sm:max-h-full sm:h-[301px] w-full flex flex-col justify-between items-center relative",
        className
      )}
    >
      <h2 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl xs:leading-10 font-medium">
        {title}
      </h2>
      {children}
      <button className="rounded-lg bg-cornflower p-3 md:p-2 xl:py-3 xl:px-3.5 font-semibold text-white cursor-pointer text-xs md:text-[10px] hover:bg-blue">
        Click to see more
      </button>
    </div>
  );
};
