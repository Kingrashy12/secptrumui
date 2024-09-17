import { CheckBox, Checked } from "@/styles/test/styled";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { Box, colors, Icon } from "secptrum-ui";
import styled from "styled-components";

type CheckBoxType = {
  /**
   * Specifies whether the checkbox should have rounded corners.
   * @default false
   */
  rounded?: boolean;

  /**
   * Defines the size of the checkbox.
   * @default 25
   */
  size?: number;

  /**
   * Sets the color of the checkbox. Accepts any valid CSS color string.
   * @default "blue"
   */
  color?: string;

  /**
   * Indicates whether the checkbox is currently checked.
   */
  checked: boolean;

  /**
   * Callback function triggered when the checkbox is checked or unchecked.
   */
  onCheck: () => void;
  disabled?: boolean;
  className?: string;
};

const Ch = ({
  rounded,
  size = 25,
  color = "blue",
  checked,
  onCheck,
  disabled,
  className,
}: CheckBoxType) => {
  return (
    <CheckBox
      onClick={onCheck}
      size={size}
      rounded={rounded}
      disabled={disabled}
      className={className}
    >
      {checked ? (
        <Checked color={color} rounded={rounded} size={size}>
          <Icon icon={IoIosCheckmark} size={21} color="white" />
        </Checked>
      ) : null}
    </CheckBox>
  );
};

export default Ch;
