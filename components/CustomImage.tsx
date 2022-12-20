import classNames from "classnames";
import Image, { ImageProps } from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  classNameContainer?: string;
} & ImageProps;

export const CustomImage = ({
  src,
  alt,
  className,
  classNameContainer,
  ...props
}: Props) => {
  return (
    <div className={classNames("relative", classNameContainer)}>
      <Image
        src={src}
        alt={alt}
        sizes="100vw"
        width="0"
        height="0"
        className={classNames("w-full h-auto", className)}
        {...props}
      />
    </div>
  );
};
