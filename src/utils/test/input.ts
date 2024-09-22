import { localColors } from "@/styles/global";
import { InputType } from "@/types/test";
import { colors } from "secptrum-ui";

const getColors = (
  outLineBorderColor: string,
  focusBorderColor: InputType["focusBorderColor"],
  focusColor: InputType["focusColor"],
  variant: InputType["variant"],
  error: boolean
) => {
  if (error) {
    return {
      border: localColors.red[500],
      focusBorder: localColors.red[500],
      focusBox: localColors.red[200],
    };
  }

  const baseColors = {
    focusBox: focusColor || localColors.blue[500],
  };

  switch (variant) {
    case "solid":
    case "ghost":
      return {
        ...baseColors,
      };
    case "outline":
      return {
        border: outLineBorderColor,
        focusBorder: focusBorderColor || localColors.blue[500],
        focusBox: focusColor || localColors.blue[200],
      };
  }
};

const getInputVariantStyles = (
  variant: InputType["variant"],
  outLineBorderColor: string,
  focusBorderColor: InputType["focusBorderColor"],
  focusColor: InputType["focusColor"],
  disabled: boolean,
  error: boolean,
  mode: InputType["mode"]
) => {
  const color = getColors(
    outLineBorderColor,
    focusBorderColor,
    focusColor,
    variant,
    error
  );

  const modeColors =
    mode === "dark"
      ? {
          neutral100: "#2E2E2E",
          neutral200: "#3C3C3C",
          solid: "#484848",
          outline: "#595959",
          ghost: localColors.neutral[700],
          focusBox: "#66BB6A",
        }
      : {
          neutral100: "#F9F9F9",
          neutral200: localColors.neutral[200],
          solid: "#CCCCCC",
          outline: "#AAAAAA",
          ghost: localColors.gray[100],
          focusBox: "#4CAF50",
        };

  // switch (variant) {
  //   case "solid":
  //     return `
  //         border: 1px solid ${color?.border};
  //         background-color: ${disabled ? colors.neutral200 : colors.neutral100};
  //         box-shadow: inset 0 2px 4px ${colors.neutral300};
  //         transition: background-color 0.3s ease, box-shadow 0.3s ease;

  //         &:hover {
  //           background-color: ${colors.neutral200};
  //         }

  //         &:focus-within {
  //           background-color: ${colors.neutral100};
  //           box-shadow: 0 0 0 2px ${color?.focusBox};
  //         }
  //       `;
  //   case "outline":
  //     return `
  //         border: 1px solid ${color?.border};
  //         background-color: ${
  //           disabled ? localColors.neutral[100] : "transparent"
  //         };
  //         transition: border-color 0.3s ease, box-shadow 0.3s ease;

  //         &:hover {
  //           border-color: ${!disabled && colors.neutral400};
  //         }

  //         &:focus-within {
  //           border-color: ${color?.focusBorder};
  //           box-shadow: 0 0 0 2px ${color?.focusBox};
  //         }
  //       `;
  //   case "ghost":
  //     return `
  //         background-color: transparent;
  //         border: 1px solid ${color?.border};
  //         transition: background-color 0.3s ease, box-shadow 0.3s ease;

  //         &:hover {
  //           background-color: ${localColors.neutral[50]};
  //         }

  //         &:focus-within {
  //           background-color: ${
  //             focusBorderColor ? focusBorderColor : localColors.neutral[50]
  //           };
  //           box-shadow: 0 0 0 2px ${color?.focusBox};
  //         }
  //       `;
  //   default:
  //     return "";
  // }

  switch (variant) {
    case "solid":
      return `
        border: 1px solid ${color?.border};
        background-color: ${
          disabled ? modeColors.neutral200 : modeColors.neutral100
        };
        box-shadow: inset 0 2px 4px ${modeColors.solid};
        transition: background-color 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          background-color: ${modeColors.neutral200};
        }

        &:focus-within {
          background-color: ${modeColors.neutral100};
          box-shadow: 0 0 0 2px ${color?.focusBox};
        }
      `;
    case "outline":
      return `
        border: 1px solid ${color?.border};
        background-color: ${disabled ? modeColors.neutral100 : "transparent"};
        transition: border-color 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          border-color: ${!disabled && modeColors.outline};
        }

        &:focus-within {
          border-color: ${color?.focusBorder};
          box-shadow: 0 0 0 2px ${color?.focusBox};
        }
      `;
    case "ghost":
      return `
        background-color: transparent;
        border: 1px solid ${color?.border};
        transition: background-color 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          background-color: ${modeColors.ghost};
        }

        &:focus-within {
          background-color: ${
            focusBorderColor ? focusBorderColor : modeColors.neutral100
          };
          box-shadow: 0 0 0 2px ${color?.focusBox};
        }
      `;
    default:
      return "";
  }
};

const getInputRadius = (radius: InputType["radius"]) => {
  switch (radius) {
    case "sm":
      return `6px`;
    case "md":
      return `8px`;
    case "lg":
      return `10px`;
    case "xl":
      return `12px`;
    case "full":
      return `9999px`;
  }
};

export { getInputRadius, getInputVariantStyles };
