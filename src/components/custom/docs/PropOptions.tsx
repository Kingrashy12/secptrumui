import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";
import Typography from "../Typography";
import { useTheme } from "@/context/useTheme";

type PropOptionType = {
  /**
   * List of props wrap with list item `li`
   */
  children: React.ReactNode;
};
const PropOptions = ({ children }: PropOptionType) => {
  const { theme } = useTheme();
  return (
    <Wrapper>
      <Lable theme={theme}>Props</Lable>
      <PropsList theme={theme}>{children}</PropsList>
    </Wrapper>
  );
};

export default PropOptions;

const Wrapper = styled(Box)`
  flex-direction: column;
  gap: 8px;
`;

const Lable = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors?.text};
`;
const PropsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  li {
    font-family: "SUSE", sans-serif;
    color: ${({ theme }) => theme.colors?.text};
  }
`;
