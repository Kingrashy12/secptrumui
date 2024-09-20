import { ButtonProps } from "@/components/test/Button";
import { FloatProps } from "@/components/test/Fab";
import { ModalPanelType } from "@/components/test/modal/ModalPanel";
import { localColors } from "@/styles/global";
import { InputType } from "@/types/test";
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

const floatColor = {
  primary: {
    light: {
      border: `1px solid ${localColors.blue[500]}`,
      background: localColors.blue[200],
      color: localColors.blue[500],
    },
    solid: {
      border: "none",
      background: localColors.blue[500],
      color: "white",
    },
  },
  secondary: {
    light: {
      border: `1px solid ${localColors.slate[500]}`,
      background: localColors.slate[200],
      color: localColors.slate[500],
    },
    solid: {
      border: "none",
      background: localColors.slate[500],
      color: "white",
    },
  },
  danger: {
    light: {
      border: `1px solid ${localColors.red[500]}`,
      background: localColors.red[200],
      color: localColors.red[500],
    },
    solid: {
      border: "none",
      background: localColors.red[500],
      color: "white",
    },
  },
};

const getColor = (
  colorScheme: FloatProps["colorScheme"],
  variant: FloatProps["variant"]
) => {
  if (variant === "light") {
    return floatColor[colorScheme || "secondary"].light;
  } else if (variant === "solid") {
    return floatColor[colorScheme || "secondary"].solid;
  }
};

const getFloatVariantStyle = (
  variant: FloatProps["variant"],
  colorScheme: FloatProps["colorScheme"],
  backgroundColor: string
) => {
  return getColor(colorScheme, variant);
};

const getFloatSize = (size: FloatProps["size"]) => {
  switch (size) {
    case "md":
      return `
      padding: 8px;
      `;
    case "lg":
      return `
      padding: 12px;
      `;
    case "xl":
      return `
      padding: 16px;
      `;
  }
};

const getPanelSize = (size: ModalPanelType["size"]) => {
  switch (size) {
    case "sm":
      return `
                width: 300px;
            `;
    case "md":
      return `
                width: 400px;
            `;
    case "lg":
      return `
      width: 500px;

      @media screen and (max-width:550px){
      width: 90%;
      }
            `;
    case "xl":
      return `
      width: 600px;
      
      @media screen and (max-width:550px){
      width: 90%;
      }
      `;
    case "full":
      return `
      width: 60%;

      @media screen and (max-width:1024px){
      width: 80%;
      }
      @media screen and (max-width:550px){
      width: 90%;
      }
      `;
  }
};

const getModalPanelTransition = (transition: ModalPanelType["transition"]) => {
  switch (transition) {
    case "walkIn":
      return `
      animation: walkIn 0.5s ease-in-out; 
      `;
    case "dropIn":
      return `
      animation: dropIn 0.5s ease-in-out;
      `;
    case "slideIn":
      return `
      animation: slideIn 0.5s ease-in-out;
      `;
  }
};

// Input Props utlis

export {
  getBorderRadius,
  getButtonStyles,
  getSizeVariant,
  getHoverStyle,
  getTabVariantStyle,
  getFloatVariantStyle,
  getFloatSize,
  getPanelSize,
  getModalPanelTransition,
};
