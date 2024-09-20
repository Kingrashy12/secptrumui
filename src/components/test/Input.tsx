// import { colors } from "../../styles/colors";
import React, { useEffect, useState } from "react";
import { InputType } from "@/types/test";
import { Icon } from "secptrum-ui";
import { localColors } from "@/styles/global";
import { Input } from "@/styles/test/styled";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useTheme } from "@/context/useTheme";

/**
 * A versatile input field component that supports different types, styles, and additional features
 * like icons. The Input component is designed to be highly customizable, making it suitable for
 * various use cases such as forms, search bars, and user data entry.
 *
 * Props:
 * - `icon`: Allows an icon to be displayed inside the input field. Accepts JSX icons (e.g., `FaUser` from react-icons)
 *   without a fragment. If a fragment is used, it may cause the component to break.
 * - `Type`: Specifies the type of input. Accepts standard HTML input types such as "text", "password", "email".
 * - `variant`: Controls the style variant of the input. Options include:
 *   - `"solid"`: A filled input style with a background.
 *   - `"outline"`: An input with an outline border.
 *   - `"ghost"`: A transparent input with no border or background.
 * - `radius`: Defines the border-radius of the input to create rounded corners. Accepts predefined sizes:
 *   - `"sm"`: Small radius.
 *   - `"md"`: Medium radius.
 *   - `"lg"`: Large radius.
 *   - `"xl"`: Extra-large radius.
 *   - `"full"`: Completely rounded corners.
 *
 * Usage:
 * Use the Input component to create user input fields with different types, styles, and optional icons.
 * This component provides a flexible way to handle input across your application with consistent styling.
 *
 * Example:
 * ```
 * <Input
 *   icon={FaUser}
 *   Type="text"
 *   variant="outline"
 *   radius="md"
 *   placeholder="Enter your username"
 * />
 * ```
 */

const TextInput = ({
  icon,
  variant = "outline",
  radius = "lg",
  Type,
  iconSize = 20,
  outLineBorderColor,
  focusBorderColor,
  focusColor,
  ...props
}: InputType): JSX.Element => {
  const [inputType, setInputType] = useState(props.type);
  const { theme } = useTheme();

  const typeMap = {
    email: "email",
    text: "text",
    password: "password",
    number: "number",
  };

  const getType = (type: InputType["Type"]) => {
    if (!type) {
      setInputType("text");
      return;
    }
    setInputType(typeMap[type] || "text");
  };

  useEffect(() => {
    getType(Type);
  }, [Type]);

  const isPassword = inputType === "password";

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <Input
      disabled={props.disabled}
      outLineBorderColor={
        outLineBorderColor || theme.colors?.outline_button_border
      }
      variant={variant}
      radius={radius}
      className={props.className}
      focusBorderColor={focusBorderColor}
      focusColor={focusColor}
    >
      {icon && (
        <Icon size={iconSize} icon={icon} color={localColors.neutral[500]} />
      )}
      <input
        {...props}
        type={inputType}
        placeholder={props.placeholder || "Type here..."}
      />
      {Type === "password" && (
        <Icon
          onClick={togglePasswordVisibility}
          size={20}
          icon={isPassword ? RiEyeFill : RiEyeOffFill}
          className="eye_pass"
        />
      )}
    </Input>
  );
};

export default TextInput;
