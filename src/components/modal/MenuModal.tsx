import { useMenu } from "@/context/useMenu";
import { useTheme } from "@/context/useTheme";
import React from "react";
import { Box, colors, Stack } from "secptrum-ui";
import styled from "styled-components";
import Media from "../custom/Media";
import { GithubImg } from "@/assets";
import Link from "next/link";
import { sidebarlinks } from "@/data/sidebar";
import Typography from "../custom/Typography";
import Backdrop from "../test/Backdrop";

const MenuModal = () => {
  const { isOpen, onClose } = useMenu();
  const { theme } = useTheme();
  return (
    <Backdrop open={isOpen} onClose={onClose}>
      <Container theme={theme}>
        <LinkWrapper>
          <Links theme={theme}>
            <Link href={sidebarlinks[1].links[0].uri}>
              <Typography>Components</Typography>
            </Link>
            <Link href="/docs/getting-started">
              <Typography>Docs</Typography>
            </Link>
          </Links>
          <Divider theme={theme} />
          <Links>
            <Link
              href="https://github.com/Kingrashy12/secptrum-ui"
              target="_blank"
            >
              <Git src={GithubImg.src} />
            </Link>
          </Links>
        </LinkWrapper>
      </Container>
    </Backdrop>
  );
};

export default MenuModal;

const Container = styled(Stack)`
  background: ${(props) => props.theme.colors?.background};
  height: auto;
`;

const LinkWrapper = styled(Box)`
  flex-direction: column;
  gap: 16px;
`;

const Links = styled(Box)`
  gap: 2.2rem;
  align-items: center;
  flex-direction: column;

  .not {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors?.text};
    display: flex;
    align-items: center;

    &:hover {
      color: ${colors.blue[500]};
    }
  }
  svg,
  img {
    &:hover {
      opacity: 0.85;
    }
  }
`;

const Git = styled(Media)`
  width: 28px;
  height: 28px;
`;

const Divider = styled.div`
  background: ${(props) => props.theme.colors?.divider};
  width: 1px;
  height: auto;
`;
