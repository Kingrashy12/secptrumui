import { useTheme } from "@/context/useTheme";
import { getModeStyle } from "@/lib/helper";
import { Button } from "@/styles/test/action/styled";
import React, { ComponentPropsWithRef, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Icon } from "secptrum-ui";

type ButtonTypes = ComponentPropsWithRef<"button">;

export declare interface ButtonProps extends ButtonTypes {
  children: string;
  /**
   * Defines the styling variants for the `Button`.
   * @property {string} solid - A solid button style with no additional classes.
   * @property {string} danger - A button style with a border and transition effects, indicating a danger or alert action.
   * @property {string} outline - A button style with a border outline.
   * @property {string} ghost - A button style with a transparent background and transition effects.
   */
  variant?: "solid" | "outline" | "ghost" | "light" | "danger";
  /**
   * Defines the border radius options for the `Button`.
   * @property {string} sm - A small border radius.
   * @property {string} md - A medium border radius.
   * @property {string} lg - A large border radius.
   * @property {string} xl - An extra-large border radius.
   * @property {string} full - A fully rounded border (circular).
   */

  radius?: "md" | "lg" | "xl" | "full";
  /**
   * Defines the size variants for the `Button`.
   * @property {string} md - A medium button size with standard padding and text.
   * @property {string} lg - A large button size with larger padding and text.
   * @property {string} xl - A extra large button size with larger padding and text.
   */
  size?: "md" | "lg" | "xl";
  /**
   * @param icon Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.
   * Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.
   */
  icon?: any;
  /**
   * @param isLoading A loading indicator used to signal a pending state action `e.g` Login
   */
  isLoading?: boolean;
  /**
   * Position of the icon inside the button, either on the `left` or `right` side.
   * @default 'left'
   */
  iconPosition?: "left" | "right";

  /**
   * The color of the button's text or icon.
   * @example "#ffffff" | "blue"
   */
  color?: string;

  /**
   * The background color of the button in its default state.
   * @example "#000000" | "red"
   */
  backgroundColor?: string;

  /**
   * The background color of the button when hovered in the solid style.
   * @example "#333333" | "green"
   */
  onHoverBackgroundSolid?: string;

  /**
   * The background color of the button when hovered in the outline style.
   * @example "#444444" | "yellow"
   */
  onHoverBackgroundOutline?: string;

  /**
   * The background color of the button when hovered in the light style.
   * @example "#555555" | "purple"
   */
  onHoverBackgroundLight?: string;

  /**
   * The background color of the button when hovered in the ghost style.
   * @example "#666666" | "cyan"
   */
  onHoverBackgroundGhost?: string;

  /**
   * The border style for the button when in outline mode.
   * @default "#000000"
   */
  outlineBorderColor?: string;
  /**
   * Specifies the width of the button. If provided, it sets the button’s width
   * to the specified value. If not provided, the button will use the default width of `auto`
   */
  width?: string;
  iconSize?: number;
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
  mode?: "dark" | "light";
  /**
   * If true, the button will take up the full width of its container.
   * @default false
   * @type {boolean}
   */
  fullWidth?: boolean;
}

const Btn = ({
  children,
  radius = "xl",
  variant = "solid",
  size = "md",
  icon,
  isLoading,
  iconPosition = "left",
  color,
  backgroundColor,
  onHoverBackgroundSolid,
  onHoverBackgroundOutline,
  onHoverBackgroundLight,
  onHoverBackgroundGhost,
  outlineBorderColor,
  width,
  iconSize,
  fullWidth,
  mode,
  ...props
}: ButtonProps): JSX.Element => {
  const disabled = props.disabled;
  const { mode: themeMode } = useTheme();
  const [m, setM] = useState(mode);

  useEffect(() => {
    if (mode) {
      setM(mode);
    } else {
      setM(themeMode as ButtonProps["mode"]);
    }
  }, [mode, themeMode]);

  const getColor = (
    varaint: ButtonProps["variant"],
    color: ButtonProps["color"],
    mode: "light" | "dark"
  ) => {
    switch (varaint) {
      case "outline":
        return `
          ${color ? color : getModeStyle(mode)?.text}
        `;
      default:
        return color;
    }
  };

  const getOulineBorder = () => {
    return getModeStyle(m as "light" | "dark")?.outline_ButtonBorderColor;
  };

  const getWidth = () => {
    if (fullWidth) {
      return `100%`;
    } else return width;
  };

  return (
    <Button
      backgroundcolor={backgroundColor}
      onHoverBackgroundSolid={onHoverBackgroundSolid}
      onHoverBackgroundGhost={onHoverBackgroundGhost}
      onHoverBackgroundLight={onHoverBackgroundLight}
      onHoverBackgroundOutline={onHoverBackgroundOutline}
      mode={m}
      outlinebordercolor={outlineBorderColor || getOulineBorder()}
      color={getColor(variant, color, m as "light" | "dark")}
      disabled={isLoading || disabled}
      {...props}
      variant={variant}
      size={size}
      radius={radius}
      width={getWidth()}
      className={props.className}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="loader" />
      ) : (
        <>
          {icon && iconPosition === "left"
            ? icon && <Icon size={iconSize} icon={icon} />
            : null}
        </>
      )}{" "}
      {children}
      {!isLoading && icon && iconPosition === "right"
        ? icon && <Icon size={iconSize} icon={icon} />
        : null}
    </Button>
  );
};

export default Btn;
