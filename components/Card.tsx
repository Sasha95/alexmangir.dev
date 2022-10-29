import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ className, children }: Props) => {
  return <div className={className}>{children}</div>;
};
