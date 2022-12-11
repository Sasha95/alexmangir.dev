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
        "bg-white shadow-3xl rounded-xl w-full xl:max-w-[346px] xl:max-h-[289px] py-5 px-6 flex flex-col items-center",
        className
      )}
    >
      {children}
    </div>
  );
};
