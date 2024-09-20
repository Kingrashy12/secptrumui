import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";
import Typography from "../Typography";
import { useTheme } from "@/context/useTheme";
import { BodyText } from "@/styles/docs/start.styled";

type PropOptionType = {
  /**
   * List of props wrap with list item `li`
   */
  children: React.ReactNode;
  hideHeader?: boolean;
  italic?: boolean;
  hasBodyText?: boolean;
  bodyText?: string;
  header?: string;
};
const PropOptions = ({
  children,
  hideHeader,
  italic,
  hasBodyText,
  bodyText,
  header,
}: PropOptionType) => {
  const { theme } = useTheme();
  return (
    <Wrapper>
      {hideHeader ? null : (
        <Lable theme={theme}>{header ? header : "Props"}</Lable>
      )}
      <PropsList italic={italic} theme={theme}>
        {children}
      </PropsList>
      {hasBodyText && <BodyText theme={theme}>{bodyText}</BodyText>}
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
const PropsList = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== "italic",
})<{ italic: PropOptionType["italic"] }>`
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  li {
    font-family: "SUSE", sans-serif;
    color: ${({ theme }) => theme.colors?.text};
    font-style: ${(props) => props.italic && "italic"};
  }
`;
