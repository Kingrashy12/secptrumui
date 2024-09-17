import { useTabList } from "@/context/useTabList";
import shouldForwardProp from "@/hooks/styled_prop";
import React from "react";
import { colors } from "secptrum-ui";
import styled from "styled-components";

/**
 * Type definition for TabsHandleType, representing the properties of a tab component.
 */
type TabsHandleType = {
  /**
   * The content to be rendered inside the tab.
   */
  children?: React.ReactNode;
  /**
   * The color to be applied when the tab is active.
   * @default "black"
   */
  activeColor?: string;
  /**
   * The color to be applied when the tab is active on @param variant `solid`.
   * @default "black"
   */
  activeSolidColor?: string;
  /**
   * The color to be applied when the tab is inactive.
   * @default "neutral"
   */
  inActiveColor?: string;
  /**
   * The unique identifier or value for the tab, typically used to track the selected tab.
   */
  value: string;
  /**
   * The function to be called when the tab is clicked.
   */
  onClick?: () => void;
  /**
   * If true, disables the tab, preventing interaction.
   */
  disabled?: boolean;
};

const TabsHandle = ({
  children,
  activeColor = "black",
  activeSolidColor = "black",
  inActiveColor = colors.neutral400,
  value,
  onClick,
  disabled = false,
}: TabsHandleType) => {
  const { onSwitch, activeTabValue, variant } = useTabList();

  function switchTab() {
    onSwitch(value);
    if (onClick) {
      onClick();
    }
  }
  const isCurrent = activeTabValue === value;
  return (
    <TabHandle
      activeColor={variant === "solid" ? activeSolidColor : activeColor}
      isCurrent={isCurrent}
      value={value}
      onClick={switchTab}
      variant={variant}
      disabled={disabled}
      inActiveColor={inActiveColor}
    >
      {children}
    </TabHandle>
  );
};

export default TabsHandle;

const getVariantStyle = (
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

const TabHandle = styled.button.withConfig({ shouldForwardProp })<{
  isCurrent: boolean;
  activeColor: string;
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
    getVariantStyle(
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
