type Props = {
  title1: string;
  title2: string;
};

export const Caption = ({ title1, title2 }: Props) => {
  return (
    <div className="flex justify-center mb-[60px]">
      <h1 className="text-4xl text-darkCornflower tracking-normal">
        {title1}&nbsp;
      </h1>
      <h1 className="text-4xl text-navy tracking-normal font-semibold">
        {title2}
      </h1>
    </div>
  );
};
