import React from "react";
import { Box } from "secptrum-ui";
import styled from "styled-components";
import Typography from "../Typography";
import { useTheme } from "@/context/useTheme";

type DescBoxType = {
  header: string;
  footer?: string;
  li: ListContent["li"];
};

const DescriptionBox = ({ li, header, footer }: DescBoxType) => {
  const { theme } = useTheme();
  return (
    <DescBox>
      <Header theme={theme}>{header}</Header>
      <UL>
        {li?.map((text, index) => (
          <ListItem key={index} theme={theme}>
            <b>{text.bold_text}:</b> {text.item_text}
          </ListItem>
        )) || null}
      </UL>
      <Header theme={theme}>{footer}</Header>
    </DescBox>
  );
};

export default DescriptionBox;

const DescBox = styled(Box)`
  flex-direction: column;
  margin-bottom: 10px;
  gap: 16px;
`;

const Header = styled(Typography)`
  color: ${(props) => props.theme.colors?.text};
  font-family: ${(props) => props.theme.fonts?.body};
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px 9px;
  gap: 12px;
`;

const ListItem = styled.li`
  color: ${(props) => props.theme.colors?.body};
  font-family: "SUSE", sans-serif;
  line-height: 1.3rem;

  b {
    color: ${(props) => props.theme.colors?.text};
    font-size: 14px;
  }
`;
