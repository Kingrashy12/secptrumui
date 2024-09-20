import { localColors } from "@/styles/global";
import { InputType } from "@/types/test";
import { colors } from "secptrum-ui";

const getInputVariantStyles = (
  variant: InputType["variant"],
  outLineBorderColor: string,
  focusBorderColor: InputType["focusBorderColor"],
  focusColor: InputType["focusColor"],
  disabled: boolean
) => {
  switch (variant) {
    case "solid":
      return `
          border: none;
          background-color: ${disabled ? colors.neutral200 : colors.neutral100};
          box-shadow: inset 0 2px 4px ${colors.neutral300};
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
  
          &:hover {
            background-color: ${colors.neutral200};
          }
  
          &:focus-within {
            background-color: ${colors.neutral100};
            box-shadow: 0 0 0 2px ${focusColor ? focusColor : colors.blue500};
          }
        `;
    case "outline":
      return `
          border: 1px solid ${outLineBorderColor};
          background-color: ${
            disabled ? localColors.neutral[100] : "transparent"
          };
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
          &:hover {
            border-color: ${!disabled && colors.neutral400};
          }
  
          &:focus-within {
            border-color: ${
              focusBorderColor ? focusBorderColor : colors.blue500
            };
            box-shadow: 0 0 0 2px ${
              focusColor ? focusColor : localColors.blue[200]
            };
          }
        `;
    case "ghost":
      return `
          background-color: transparent;
          border: none;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
  
          &:hover {
            background-color: ${localColors.neutral[50]};
          }
  
          &:focus-within {
            background-color: ${
              focusBorderColor ? focusBorderColor : localColors.neutral[50]
            };
            box-shadow: 0 0 0 2px ${focusColor ? focusColor : colors.blue500};
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
