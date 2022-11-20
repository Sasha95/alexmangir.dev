import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const AdditionalCard = ({ children }: Props) => {
  return (
    <div
      className={
        "bg-white shadow-3xl rounded-xl w-[346px] pt-5 pb-[18px] px-6 flex flex-col items-center"
      }
    >
      {children}
    </div>
  );
};
