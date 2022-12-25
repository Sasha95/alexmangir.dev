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
        "bg-white rounded-lg shadow-3xl rad pt-7 pb-6 sm:pt-9 sm:pb-6 md:py-3 w-full h-full md:h-auto flex flex-col justify-between items-center relative",
        className
      )}
    >
      <h2 className="text-3xl md:text-xl lg:text-2xl xl:text-3xl xs:leading-10 font-medium">
        {title}
      </h2>
      <>{children}</>
      <button className="rounded-lg bg-cornflower p-3 md:p-2 xl:py-3 xl:px-3.5 font-semibold text-white cursor-pointer text-xs md:text-[10px] hover:bg-blue mt-1.5">
        Click to see more
      </button>
    </div>
  );
};
