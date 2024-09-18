import { getTabVariantStyle } from "@/utils/test/variant";
import { Box, colors, shouldForwardProps } from "secptrum-ui";
import styled from "styled-components";

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
  /* filter: drop-shadow(1px 0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(1px 0 1px 1px rgb(0 0 0 / 0.06)); */
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
