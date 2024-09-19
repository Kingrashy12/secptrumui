import { useTabList } from "@/context/useTabList";
import { useTheme } from "@/context/useTheme";
import shouldForwardProp from "@/hooks/styled_prop";
import { TabHandle } from "@/styles/test/styled";
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
  activeColor,
  activeSolidColor,
  inActiveColor = colors.neutral400,
  value,
  onClick,
  disabled = false,
}: TabsHandleType) => {
  const { onSwitch, activeTabValue, variant } = useTabList();
  const { theme } = useTheme();

  function switchTab() {
    onSwitch(value);
    if (onClick) {
      onClick();
    }
  }
  const isCurrent = activeTabValue === value;
  const active_solidColor = activeSolidColor
    ? activeSolidColor
    : theme.colors?.active_tab_color_solid;
  const active_color = activeColor
    ? activeColor
    : theme.colors?.active_tab_color;

  return (
    <TabHandle
      activeColor={variant === "solid" ? active_solidColor : active_color}
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
