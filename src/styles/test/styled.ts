import { ButtonProps } from "@/components/test/Button";
import { ModalPanelType } from "@/components/test/modal/ModalPanel";
import { InputType } from "@/types/test";
import {
  getBorderRadius,
  getButtonStyles,
  getHoverStyle,
  getModalPanelTransition,
  getPanelSize,
  getSizeVariant,
  getTabVariantStyle,
} from "@/utils/test/variant";
import { Box, colors, shouldForwardProps } from "secptrum-ui";
import styled from "styled-components";
import { localColors } from "../global";
import { getInputRadius, getInputVariantStyles } from "@/utils/test/input";
import { getToastPosition } from "@/utils/test/position";
import { getToastTransition } from "@/utils/test/transition";

const shouldForwardProp = shouldForwardProps;

export const Switch = styled(Box).withConfig({ shouldForwardProp })<{
  width: string;
  height: string;
  checked: boolean;
  checkedColor: string;
  color: string;
  disabled: boolean | any;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 9999px;
  padding: 2px;
  border: 1px solid ${colors.neutral200};
  background-color: ${(props) =>
    props.checked ? props.checkedColor : props.color};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => props.disabled && "none"};
`;

export const SwitchHandle = styled.div.withConfig({ shouldForwardProp })<{
  height: string;
  checked: boolean;
  switchWidth: string;
}>`
  width: ${(props) => props.switchWidth};
  height: ${(props) => props.height};
  background: white;
  border-radius: 9999px;
  position: absolute;
  right: ${(props) => props.checked && `2px`};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;

// Extend shouldForwardProps to include - size, rounded ad disabled
export const CheckBox = styled.div<{
  rounded: boolean | any;
  size: number;
  disabled: boolean | any;
}>`
  background: none;
  border: 1px solid ${colors.neutral200};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => (props.rounded ? `${props.size / 2}px` : "7px")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => props.disabled && "none"};
`;
// Extend shouldForwardProps to include - color and rounded
export const Checked = styled(Box)<{
  color: string;
  rounded: boolean | any;
  size: number;
}>`
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.rounded ? `${props.size / 2}px` : "7px")};
`;

export const CardWrap = styled(Box).withConfig({
  shouldForwardProp,
})<{
  centerContent?: boolean;
  backgroundColor: string | any;
  borderColor: string | any;
}>`
  flex-direction: column;
  background: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 11px;
  padding: 16px;
  width: auto;
  max-width: 100%;
  justify-content: center;
  align-items: ${(props) => props.centerContent && "center"};
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;

export const TabHandle = styled.button.withConfig({ shouldForwardProp })<{
  isCurrent: boolean;
  activeColor: string | any;
  variant: "line" | "solid";
  inActiveColor: string;
  disabled: boolean;
}>`
  font-family: "Poppins-Medium", sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  border: none;
  padding: 9px;
  font-weight: 500;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  ${(props) =>
    getTabVariantStyle(
      props.variant,
      props.isCurrent,
      props.activeColor,
      props.inActiveColor,
      props.disabled
    )}

  &:hover {
    border-bottom-color: ${(props) => !props.isCurrent && colors.neutral300};
  }
`;

export const FixedBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 500;
`;
// Button style
export const Button = styled.button.withConfig({
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
  width: ButtonProps["width"];
}>`
  max-width: 100%;
  width: ${(props) => props.width || "auto"};
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
// Backdrop style
export const Drop = styled(FixedBox).withConfig({ shouldForwardProp })<{
  open: boolean;
  centerContent: boolean;
}>`
  background: ${(props) => props.theme.colors?.drop};
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: ${(props) => props.centerContent && "center"};
  align-items: ${(props) => props.centerContent && "center"};
  backdrop-filter: ${(props) => `blur(${props.theme.effects?.drop_blur}px)`};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;

// Modal Panel
export const ModalPanel = styled.div.withConfig({ shouldForwardProp })<{
  size: ModalPanelType["size"];
  transition: ModalPanelType["transition"];
}>`
  position: relative;
  background: ${(props) => props.theme?.colors?.background || "white"};
  border-radius: 11px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  padding: 20px;
  z-index: 1000;
  overflow: hidden;
  ${(props) => getPanelSize(props.size)};
  ${(props) => getModalPanelTransition(props.transition)}
  animation-fill-mode: forwards;
  animation-delay: 0s;

  @keyframes slideIn {
    from {
      transform: translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }
  @keyframes dropIn {
    from {
      transform: translateY(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  @keyframes walkIn {
    from {
      scale: 0.2;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;

// Modal Title
export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme?.colors?.text || "black"};
  font-family: inherit;
`;

// Modal Description
export const ModalContent = styled(Box).withConfig({
  shouldForwardProp: (prop) => prop !== "space",
})<{ space?: number }>`
  margin: 5px 0;
  flex-direction: column;
  gap: ${(props) => props.space || 16}px;
`;

// Modal Footer
export const ModalFooter = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "space",
})<{ space?: number; position?: "right" | "left" }>`
  display: flex;
  justify-content: ${(props) =>
    props.position === "left" ? "flex-start" : "flex-end"};
  margin-top: 20px;
  /* border-top: 1px solid
    ${(props) => props.theme?.colors?.outline_button_border || "#e0e0e0"}; */
  padding-top: 10px;
  gap: ${(props) => props.space || 10}px;
`;

// Input style

export const Input = styled.div.withConfig({
  shouldForwardProp,
})<{
  variant: InputType["variant"];
  radius: InputType["radius"];
  outLineBorderColor: string | any;
  focusColor: InputType["focusColor"];
  focusBorderColor: InputType["focusBorderColor"];
  disabled: boolean | any;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 12px;
  gap: 6px;
  border-radius: ${(props) => getInputRadius(props.radius)};

  ${(props) =>
    props.disabled &&
    `
  pointer-event: none;
  cursor: default;
  `};
  ${(props) =>
    getInputVariantStyles(
      props.variant,
      props.outLineBorderColor,
      props.focusBorderColor,
      props.focusColor,
      props.disabled
    )};

  input {
    flex: 1;
    font-weight: 500;
    outline: none;
    border: none;
    background: transparent;
    caret-color: ${colors.blue500};
    color: currentColor;
    font-family: inherit;
    transition: color 0.3s ease;
    height: 100%;

    &:focus {
      outline: none;
    }
  }

  .eye_pass {
    cursor: pointer;
    color: ${localColors.neutral[400]};
    transition: color 0.3s ease;

    &:hover {
      color: ${localColors.neutral[600]};
    }
  }
`;

// Toast style

export const StyledToast = styled(Box).withConfig({
  shouldForwardProp,
})<{
  position: ToastPositionType;
  showtoast: boolean;
  transition: ToastOptionsType["transition"];
}>`
  background: white;
  width: auto;
  height: auto;
  border-radius: 6px;
  font-family: "Poppins-Medium", sans-serif;
  border: 1px solid ${colors.neutral200};
  filter: drop-shadow(1px 1px 1px ${colors.slate200});
  gap: 5px;
  position: fixed;
  max-width: 400px;
  ${(props) => getToastPosition(props.position)}
  display: ${(props) => (props.showtoast ? "flex" : "none")};
  ${(props) => getToastTransition(props.transition)}
  z-index: 1000;

  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes dropIn {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  @keyframes popIn {
    0% {
      transform: translateY(50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  @keyframes walkIn {
    0% {
      scale: 0.1;
      opacity: 0;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }

  .header {
    font-weight: 600;
    color: black;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  span {
    font-weight: 500;
    color: ${colors.neutral600};
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    max-width: 90%;
  }
`;

export const ContentWrap = styled(Box)`
  padding: 12px;
  gap: 8px;
  width: fit-content;
`;

export const ToastContent = styled(Box)`
  gap: 2px;
  width: 90%;
`;

export const CloseIcon = styled(Box).withConfig({
  shouldForwardProp,
})<{ type: ToastVariant | "warning" }>`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${colors.neutral200};
  padding: 12px;
  height: auto;
  transition: all;
  transition-duration: 100ms;
  transition-delay: 100ms;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  &:hover {
    background: ${colors.slate100};
    transition: all;
    transition-duration: 100ms;
    transition-delay: 100ms;
  }

  svg {
    padding: 4px;
  }
`;
