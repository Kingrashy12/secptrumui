"use-client";
import { fontPoppins, fontNunito, fontInter, fontOff } from "@/styles/global";
import React, { ComponentProps, ElementType } from "react";

// Define the props type, allowing any HTML element type and adding custom props
interface TextProps extends ComponentProps<"p"> {
  children?: React.ReactNode; // Can be any type of child elements
  font?: "poppins" | "nunito" | "inter" | "off"; // Custom font prop
  as?: ElementType; // Element type to render, default to "p"
}

const getFonts = (font: TextProps["font"]) => {
  switch (font) {
    case "poppins":
      return fontPoppins.className;
    case "inter":
      return fontInter.className;
    case "nunito":
      return fontNunito.className;
    case "off":
      return fontOff.className;
    default:
      return fontPoppins.className;
  }
};

const Typography = ({
  children,
  font,
  as: Component = "p",
  ...props
}: TextProps) => {
  return (
    <Component {...props} className={`${getFonts(font)} ${props.className}`}>
      {children}
    </Component>
  );
};

export default Typography;
