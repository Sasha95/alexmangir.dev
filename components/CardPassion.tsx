import Image from "next/image";

type Props = {
  work: string;
  image: string;
  alt: string;
  description: string;
};

export const CardPassion = ({ work, description, image, alt }: Props) => {
  return (
    <>
      <Image
        alt={alt}
        src={image}
        width={225}
        height={159}
        className={"mb-4"}
      />
      <div className="flex">
        <p className="font-semibold	text-2xl">{work} &nbsp;</p>
        <p className="text-2xl">Developer</p>
      </div>
      <p>{description}</p>
    </>
  );
};
