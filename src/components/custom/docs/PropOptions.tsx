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
  const labelId = header ? header?.toLowerCase().replace(/\s/g, "-") : "props";
  return (
    <Wrapper id={labelId}>
      {hideHeader ? null : (
        <Lable theme={theme} as="h4" id={labelId}>
          {header ? header : "Props"}
        </Lable>
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
  font-family: "General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  letter-spacing: 0.1px;
  line-height: 1.5;
`;
const PropsList = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== "italic",
})<{ italic: PropOptionType["italic"] }>`
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  li {
    font-family: "SUSE", sans-serif;
    /* font-family: "Poppins-Normal", sans-serif; */
    color: ${({ theme }) => theme.colors?.text};
    font-style: ${(props) => props.italic && "italic"};
  }
`;
