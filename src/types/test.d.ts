import React, { ComponentPropsWithRef } from "react";

type InputProps = ComponentPropsWithRef<"input">;

declare interface InputType extends InputProps {
  /**
   * @param icon Accepts a JSX element representing an icon, such as `icon={FaUser}` from react-icons.
   * Avoid wrapping the icon in a fragment (`<>...</>` or `<FaUser/>`) or other component, as this may cause the component to break.
   */
  icon?: any;
  /**
   * @param variant Indicates the style which the Input Components will inherits to, default `solid`
   */
  variant?: "solid" | "outline" | "ghost";
  /**
   * @param radius Defines the border-radius size of the input, determining how rounded the corners will be.
   * Available options: "sm" (small), "md" (medium), "lg" (large), "xl" (extra large), or "full" (completely rounded).
   */
  radius?: "sm" | "md" | "lg" | "xl" | "full";
  /**
   * @param Type Specifies the type of input to render. Determines the kind of data that the input will handle.
   * Possible values: "password" (for password input), "text" (for generic text), "email" (for email addresses), or "file" (for file uploads).
   */
  Type: "password" | "text" | "email" | "number";
  /**
   * The size of the icon.
   *
   * @type {number}
   * @optional
   */
  iconSize?: number;
  /**
   * The color of the outline border.
   *
   * @type {string}
   * @optional
   */
  outLineBorderColor?: string;
  /**
   * The color of the input when focused.
   *
   * @type {string}
   * @optional
   */
  focusColor?: string;
  /**
   * The color of the border when the input is focused.
   *
   * @type {string}
   * @optional
   */
  focusBorderColor?: string;
  /**
   * Indicates if the input is in an error state.
   *
   * @type {boolean}
   * @optional
   */
  error?: boolean | any;
  /**
   * The error message to display when the input is in an error state.
   *
   * @type {string}
   * @optional
   */
  errorMessage?: string;
  /**
   * Defines whether the input has a label.
   * @type {string}
   */
  hasLabel?: string;

  /**
   * The label text to display for the input field.
   * @type {string}
   */
  label?: string;

  /**
   * Specifies the width of the input, e.g., '100%' or '250px'.
   * @type {string}
   */
  width?: string;

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

  /**
   * Additional class name to apply to the form container element.
   * @type {string}
   */
  formClassName?: string;

  /**
   * Inline styles to apply to the form container.
   * @type {React.CSSProperties}
   */
  formStyle?: React.CSSProperties;

  /**
   * Inline styles to apply to the input element.
   * @type {React.CSSProperties}
   */
  inputStyle?: React.CSSProperties;

  /**
   * The text color for the input field.
   * @type {string}
   */
  color?: string;

  /**
   * The background color for the input field.
   * @type {string}
   */
  backgroundColor?: string;

  /**
   * Override the default hover background color for the 'solid' variant.
   * @type {string}
   * @default inherited from theme
   */
  solidVariantHoverColor?: string;

  /**
   * Override the default hover background color for the 'ghost' variant.
   * @type {string}
   * @default inherited from theme
   */
  ghostVariantHoverColor?: string;
}
