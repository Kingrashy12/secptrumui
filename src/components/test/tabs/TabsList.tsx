import { TabListProvider } from "@/context";
import { useTheme } from "@/context/useTheme";
import React from "react";
import { colors, Stack } from "secptrum-ui";
import styled from "styled-components";

/**
 * Type definition for TabsListType, representing the properties of a list of tabs.
 */
type TabsListType = {
  /**
   * The content to be rendered inside the list of tabs, typically an array of tab components.
   */
  children?: React.ReactNode;
  /**
   * The visual style variant for the tab list, either `line` (with an underline) or `solid` (with filled background).
   * @default "line"
   */
  variant?: "line" | "solid";
  backgroundColor?: string;
};

const TabsList = ({
  children,
  variant = "line",
  backgroundColor,
}: TabsListType) => {
  const { theme } = useTheme();

  const tab_bg = backgroundColor
    ? backgroundColor
    : theme.colors?.tabListBackground;
  return (
    <TabListProvider tabVariant={variant}>
      <TabList backgroundColor={tab_bg} variant={variant} align="horizontal">
        {children}
      </TabList>
    </TabListProvider>
  );
};

export default TabsList;

const TabList = styled(Stack)<{
  variant: TabsListType["variant"];
  backgroundColor: string | any;
}>`
  padding: 0;
  border-bottom: ${(props) =>
    props.variant === "line" ? `1px solid ${colors.neutral200}` : "none"};
  padding: ${(props) => (props.variant === "solid" ? "5px" : 0)};
  border-radius: ${(props) => (props.variant === "solid" ? "6px" : "none")};
  background: ${(props) =>
    props.variant === "solid" ? props.backgroundColor : "transparent"};
  align-items: center;
  width: auto;
`;
