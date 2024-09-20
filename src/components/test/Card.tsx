import { useTheme } from "@/context/useTheme";
import { CardWrap } from "@/styles/test/styled";
import React, { ComponentPropsWithRef } from "react";
// import { colors } from "secptrum-ui";

export type BoxProps = ComponentPropsWithRef<"div">;

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
  /**
   * A custom border color to override the default or theme border color
   */
  borderColor?: string;

  /**
   * Controls the internal spacing between card elements
   * Accepts only number
   */
  space?: number;
}

const Card = ({
  children,
  backgroundColor,
  centerContent,
  borderColor,
  space,
  ...props
}: CardType) => {
  // To do: get theme here and integrate to color state
  const { theme } = useTheme();
  return (
    <CardWrap
      {...props}
      space={space}
      borderColor={borderColor || theme.colors?.card_BorderColor}
      backgroundColor={backgroundColor || theme.colors?.card}
      className={props.className}
      centerContent={centerContent}
      card_BoxShadowColor={theme.colors?.card_BoxShadowColor}
    >
      {children}
    </CardWrap>
  );
};

export default Card;
