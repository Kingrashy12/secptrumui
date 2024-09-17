import { Switch, SwitchHandle } from "@/styles/test/styled";
import React from "react";
import { Box, colors, shouldForwardProps } from "secptrum-ui";

type SwitchType = {
  /**
   * The background color of the switch when it is not checked.
   * @default colors.neutral300
   */
  color?: string;

  /**
   * The background color of the switch when it is checked.
   * @default "blue"
   */
  checkedColor?: string;

  /**
   * The size variant of the switch, which determines its width and height.
   * Can be either "md" (medium) or "lg" (large).
   * @default "md"
   */
  variant?: "md" | "lg";
  /**
   * Callback function triggered when the switch is toggled.
   */
  onSwitch: () => void;

  /**
   * Indicates whether the switch is currently checked (on) or not (off).
   * @default false
   */
  checked?: boolean;
  className?: string;
  disabled?: boolean;
};

const getSize = (variant: SwitchType["variant"]) => {
  switch (variant) {
    case "md":
      return { width: `35px`, height: `20px` };
    case "lg":
      return { width: `42px`, height: `27px` };
    default:
      return { width: `35px`, height: `15px` };
  }
};
const getSwitchSize = (variant: SwitchType["variant"]) => {
  switch (variant) {
    case "md":
      return { width: `15px`, height: `15px` };
    case "lg":
      return { width: `22px`, height: `22px` };
    default:
      return { width: `15px`, height: `15px` };
  }
};

const Sw = ({
  color = colors.neutral300,
  checkedColor = "blue",
  variant = "md",
  onSwitch,
  className,
  checked = false,
  disabled,
}: SwitchType) => {
  const { width, height } = getSize(variant);
  const { width: switchWidth, height: switchHeight } = getSwitchSize(variant);

  return (
    <Switch
      width={width}
      height={height}
      checked={checked}
      checkedColor={checkedColor}
      color={color}
      onClick={onSwitch}
      className={className}
      disabled={disabled}
    >
      <SwitchHandle
        height={switchHeight}
        switchWidth={switchWidth}
        checked={checked}
      />
    </Switch>
  );
};

export default Sw;
