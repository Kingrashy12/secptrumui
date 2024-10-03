import { useTheme } from "@/context/useTheme";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { getPageContents } from "@/store/contentBar";
import { fonts, localColors } from "@/styles/global";
import Link from "next/link";
import React, { useEffect } from "react";
import { Box, colors } from "secptrum-ui";
import styled from "styled-components";

const DocBar = () => {
  const headers = useAppSelector((state) => state.page_content.contents);
  const { theme, mode } = useTheme();
  const light = mode === "light";

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (headers.length < 1) {
      dispatch(getPageContents());
    }
  }, [headers.length]);

  return (
    <StyledBar theme={theme} light={light}>
      <ContentWrap>
        {/* <Typography as="h3">Table of Contents</Typography> */}
        <UL>
          {headers
            .filter((header) => header.text.length! < 50 && header.id !== "")
            .map((header, index) => (
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
  width: 250px;
  border-left: 1px solid
    ${(props) => (props.light ? colors.neutral[300] : localColors.neutral[800])};
  overflow-y: auto;
  flex-direction: column;
  position: sticky;
  top: 0;
  flex-shrink: 0;
  right: 0;
  gap: 3rem;
  background: ${(props) => props.theme.colors?.background};

  @media screen and (max-width: 1024px) {
    width: 150px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const ContentWrap = styled(Box)`
  flex-direction: column;
  gap: 1rem;

  margin-top: 3rem;
  padding: 20px 30px;

  h3 {
    color: ${colors.neutral[500]};
    font-size: 14px;
  }
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  /* padding: 5px 9px; */

  a {
    text-decoration: none;
  }
`;

const ListItem = styled.p`
  color: ${(props) => props.theme.colors?.text};
  font-family: ${fonts.inter};
  font-weight: 400;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
    color: blue;
  }
`;
