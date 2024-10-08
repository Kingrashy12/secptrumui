import { useTheme } from "@/context/useTheme";
import { getModeStyle } from "@/lib/helper";
import { CardWrap } from "@/styles/test/layout/styled";
import React, { ComponentPropsWithRef, useEffect, useState } from "react";

export type BoxProps = ComponentPropsWithRef<"div">;
// Extend main box types not props
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
  /**
   * Sets the theme mode for the input component.
   *
   * Options:
   * - `light` (default)
   * - `dark`
   * - Custom theme mode (override default styles)
   *
   * Allows developers to integrate with apps that support light/dark modes or provide a custom design.
   * @type {"light" | "dark"}
   */
  mode?: "light" | "dark";
}

const Card = ({
  children,
  backgroundColor,
  centerContent,
  borderColor,
  space,
  mode,
  ...props
}: CardType) => {
  const { mode: themeMode } = useTheme();
  const [m, setM] = useState(mode);

  useEffect(() => {
    if (mode) {
      setM(mode);
    } else {
      setM(themeMode as CardType["mode"]);
    }
  }, [mode, themeMode]);

  const modeStyle = {
    background: getModeStyle(m as "light" | "dark")?.card,
    borderColor: getModeStyle(m as "light" | "dark")?.card_BorderColor,
    cardShadow: getModeStyle(m as "light" | "dark")?.cardShadow,
  };

  return (
    <CardWrap
      {...props}
      space={space}
      borderColor={borderColor || modeStyle.borderColor}
      backgroundcolor={backgroundColor || modeStyle.background}
      className={props.className}
      centerContent={centerContent}
      cardShadow={modeStyle.cardShadow}
    >
      {children}
    </CardWrap>
  );
};

export default Card;
