import Typography from "@/components/custom/Typography";
import { useTheme } from "@/context/useTheme";
import { useAppSelector } from "@/hooks/store";
import { fonts, localColors } from "@/styles/global";
import Link from "next/link";
import React from "react";
import { Box, colors } from "secptrum-ui";
import styled from "styled-components";

const DocBar = () => {
  const headers = useAppSelector((state) => state.page_content.contents);
  const { theme, mode } = useTheme();
  const light = mode === "light";

  return (
    <StyledBar theme={theme} light={light}>
      <ContentWrap>
        <Typography as="h3">Table of Contents</Typography>
        <UL>
          {headers.map((header, index) => (
            <Link href={`#${header.id}`} key={index}>
              <ListItem theme={theme} key={header.id}>
                {header.text}
              </ListItem>
            </Link>
          ))}
        </UL>
      </ContentWrap>
    </StyledBar>
  );
};

export default DocBar;

const StyledBar = styled(Box).withConfig({
  shouldForwardProp: (props) => props !== "light",
})<{ light: boolean }>`
  height: 100vh;
  width: 300px;
  border-left: 1px solid
    ${(props) => (props.light ? colors.neutral[300] : localColors.neutral[800])};
  overflow-y: auto;
  flex-direction: column;
  position: sticky;
  top: 0;
  flex-shrink: 0;
  gap: 3rem;
  background: ${(props) => props.theme.colors?.background};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ContentWrap = styled(Box)`
  flex-direction: column;
  gap: 1rem;

  margin-top: 3rem;
  margin: auto;

  h3 {
    color: ${colors.neutral[500]};
    font-size: 14px;
  }
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px 9px;

  a {
    text-decoration: none;
  }
`;

const ListItem = styled.li`
  color: ${(props) => props.theme.colors?.text};
  font-family: ${fonts.inter};
  font-weight: 500;

  &:hover {
    opacity: 0.8;
    color: blue;
  }
`;
