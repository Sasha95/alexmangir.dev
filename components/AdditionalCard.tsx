import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const AdditionalCard = ({ children, className }: Props) => {
  return (
    <div
      className={classNames(
        "bg-white shadow-3xl rounded-xl w-full xl:min-w-[346px] xl:max-h-[289px] py-7 md:py-4 lg:pt-7 xl:py-5 lg:pb-5 md:px-3 px-6 flex flex-col items-center",
        className
      )}
    >
      {children}
    </div>
  );
};
