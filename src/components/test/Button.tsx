import { useTheme } from "@/context/useTheme";
import shouldForwardProp from "@/hooks/styled_prop";
import {
  getBorderRadius,
  getButtonStyles,
  getHoverStyle,
  getSizeVariant,
} from "@/utils/test/variant";
import React, { ComponentPropsWithRef } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { colors, Icon } from "secptrum-ui";
import styled from "styled-components";

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
  ...props
}: ButtonProps): JSX.Element => {
  const disabled = props.disabled;
  const { theme } = useTheme();
  return (
    <Button
      backgroundColor={backgroundColor}
      onHoverBackgroundSolid={onHoverBackgroundSolid}
      onHoverBackgroundGhost={onHoverBackgroundGhost}
      onHoverBackgroundLight={onHoverBackgroundLight}
      onHoverBackgroundOutline={
        onHoverBackgroundOutline || theme.colors?.button_outline_hover
      }
      outlineBorderColor={
        outlineBorderColor || theme.colors?.outline_button_border
      }
      color={color}
      disabled={isLoading || disabled}
      {...props}
      variant={variant}
      size={size}
      radius={radius}
      className={props.className}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="loader" />
      ) : (
        <>
          {icon && iconPosition === "left"
            ? icon && <Icon icon={icon} />
            : null}
        </>
      )}{" "}
      {children}
      {!isLoading && icon && iconPosition === "right"
        ? icon && <Icon icon={icon} />
        : null}
    </Button>
  );
};

export default Btn;

const Button = styled.button.withConfig({
  shouldForwardProp,
})<{
  variant: ButtonProps["variant"];
  radius: ButtonProps["radius"];
  size: ButtonProps["size"];
  outlineBorderColor: ButtonProps["outlineBorderColor"];
  backgroundColor: ButtonProps["backgroundColor"];
  onHoverBackgroundSolid: ButtonProps["onHoverBackgroundSolid"];
  onHoverBackgroundOutline: ButtonProps["onHoverBackgroundOutline"];
  onHoverBackgroundGhost: ButtonProps["onHoverBackgroundGhost"];
  onHoverBackgroundLight: ButtonProps["onHoverBackgroundLight"];
}>`
  width: 100%;
  font-weight: 500;
  border: none;
  cursor: pointer;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: ${(props) => getSizeVariant(props.size)};
  border-radius: ${(props) => getBorderRadius(props.radius)};
  font-family: "Poppins-Medium", sans-serif;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.75;
    pointer-events: none;
  `}
  &:hover {
    ${(props) =>
      getHoverStyle(
        props.variant,
        props.onHoverBackgroundSolid,
        props.onHoverBackgroundOutline,
        props.onHoverBackgroundGhost,
        props.onHoverBackgroundLight
      )};
  }
  ${(props) =>
    getButtonStyles(
      props.variant,
      props.color,
      props.outlineBorderColor,
      props.backgroundColor
    )};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  .loader {
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
