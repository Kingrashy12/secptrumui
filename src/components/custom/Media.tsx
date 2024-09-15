import { StaticImageData } from "next/image";
import React, { ComponentProps } from "react";

type ImageProps = ComponentProps<"img">;

interface ImageType extends ImageProps {
  src: string | StaticImageData | any;
}

const Media = ({ src, ...props }: ImageType) => {
  return <img {...props} src={src} alt={props.alt} />;
};

export default Media;
