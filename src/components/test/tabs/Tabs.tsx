import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";

type TabsType = {
  children?: React.ReactNode;
};

const Tab = ({ children }: TabsType) => {
  return <Tabs>{children}</Tabs>;
};

export default Tab;

const Tabs = styled(Box)`
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
