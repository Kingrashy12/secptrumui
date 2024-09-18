import { ButtonProps } from "@/components/test/Button";
import { localColors } from "@/styles/global";
import { colors } from "secptrum-ui";

const getBorderRadius = (radius: ButtonProps["radius"]) => {
  switch (radius) {
    case "md":
      return `4px`;
    case "lg":
      return `6px`;
    case "xl":
      return `12px`;
    case "full":
      return `9999px`;
  }
};

const getSizeVariant = (size: ButtonProps["size"]) => {
  switch (size) {
    case "md":
      return `8px`;
    case "lg":
      return `12px`;
    case "xl":
      return `16px`;
  }
};

const getHoverStyle = (
  variant: ButtonProps["variant"],
  onHoverBackgroundSolid: ButtonProps["onHoverBackgroundSolid"],
  onHoverBackgroundOutline: ButtonProps["onHoverBackgroundOutline"],
  onHoverBackgroundGhost: ButtonProps["onHoverBackgroundGhost"],
  onHoverBackgroundLight: ButtonProps["onHoverBackgroundLight"]
) => {
  switch (variant) {
    case "solid":
      return `
          background: ${
            onHoverBackgroundSolid ? onHoverBackgroundSolid : colors.blue600
          }
          `;
    case "ghost":
      return `
             background: ${
               onHoverBackgroundGhost ? onHoverBackgroundGhost : colors.blue100
             }
          `;
    case "light":
      return `
             background: ${
               onHoverBackgroundLight
                 ? onHoverBackgroundLight
                 : localColors.blue[200]
             }
          `;
    case "outline":
      return `
      background: ${
        onHoverBackgroundOutline
          ? onHoverBackgroundOutline
          : localColors.gray[50]
      };
      `;
    case "danger":
      return `
      background: ${localColors.red[700]}
      `;
  }
};

const getButtonStyles = (
  variant: ButtonProps["variant"],
  color: ButtonProps["color"],
  outlineBorderColor: ButtonProps["outlineBorderColor"],
  backgroundColor: ButtonProps["backgroundColor"]
) => {
  switch (variant) {
    case "solid":
      return `
          background: ${backgroundColor ? backgroundColor : colors.blue500};
          color: ${color ? color : "white"};
          `;
    case "ghost":
      return `
            color: ${color ? color : colors.blue500};
            background: transparent;
          `;
    case "light":
      return `
            background: ${backgroundColor ? backgroundColor : colors.blue100};
            border: 1px solid ${colors.blue500};
            color: ${color ? color : colors.blue500};
          `;
    case "outline":
      return `
       background: none;
       border: 1px solid ${outlineBorderColor};
       color: ${color ? color : "currentColor"};
       filter: drop-shadow(0 1px 1pxpx rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
      `;
    case "danger":
      return `
      background: ${localColors.red[600]};
      color: white;
      `;
  }
};

const getTabVariantStyle = (
  varaint: "line" | "solid",
  isCurrent: boolean,
  activeColor: string,
  inActiveColor: string,
  disabled: boolean
) => {
  switch (varaint) {
    case "solid":
      return {
        background: isCurrent ? "white" : "transparent",
        "border-radius": "5px",
        filter: isCurrent
          ? "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))"
          : "",
        color: isCurrent ? activeColor : inActiveColor,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        "pointer-events": disabled ? "none" : "all",
      };
    case "line":
      return {
        background: "transparent",
        "border-bottom-width": `2px`,
        "border-bottom-style": `solid`,
        "border-bottom-color": isCurrent ? activeColor : "transparent",
        color: isCurrent ? activeColor : inActiveColor,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        "pointer-events": disabled ? "none" : "all",
      };
  }
};

export {
  getBorderRadius,
  getButtonStyles,
  getSizeVariant,
  getHoverStyle,
  getTabVariantStyle,
};
