type Props = {
  title1: string;
  title2: string;
};

export const Caption = ({ title1, title2 }: Props) => {
  return (
    <div className="flex justify-center items-center lg:mb-14 md:mb-5 mb-9 sm:mb-10">
      <h1 className="md:text-4xl md:leading-[52px] text-2xl leading-8 tracking-normal">
        {title1}&nbsp;
      </h1>
      <h1 className="xl:text-4xl text-2xl leading-8 md:text-4xl md:leading-[52px] text-navy tracking-normal font-semibold">
        {title2}
      </h1>
    </div>
  );
};
