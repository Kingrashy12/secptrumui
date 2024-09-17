import { CardWrap } from "@/styles/test/styled";
import React, { ComponentPropsWithRef } from "react";
import { colors } from "secptrum-ui";

type BoxProps = ComponentPropsWithRef<"div">;

declare interface CardType extends BoxProps {
  children?: React.ReactNode;
  /**
   * An indication to center card content
   */
  centerContent?: boolean;
  /**
   * A custom background color to overide current one or provide theme colors
   */
  backgroundColor?: string;
  borderColor?: string;
}

const Card = ({
  children,
  backgroundColor = "white",
  centerContent,
  borderColor = colors.neutral300,
  ...props
}: CardType) => {
  // To do: get theme here and integrate to color state
  return (
    <CardWrap
      {...props}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      className={props.className}
      centerContent={centerContent}
    >
      {children}
    </CardWrap>
  );
};

export default Card;
