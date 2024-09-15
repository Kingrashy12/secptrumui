import React from "react";
import styled from "styled-components";
import Media from "../custom/Media";
import { GithubImg, SecptrumLogo } from "@/assets";
import { Box, colors, Icon } from "secptrum-ui";
import Typography from "../custom/Typography";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { MdSunny } from "react-icons/md";
import { useTheme } from "@/context/useTheme";
import { IoMdMoon } from "react-icons/io";
import { sidebarlinks } from "@/data/sidebar";

const Navbar = () => {
  const { mode, theme, toggleTheme } = useTheme();
  const light = mode === "light";

  return (
    <Nav light={light}>
      <Box className="logo">
        <Link href="/">
          <Logo src={SecptrumLogo.src} />
        </Link>
      </Box>
      <LinkWrapper>
        <Links theme={theme}>
          <Link href={sidebarlinks[1].links[0].uri}>
            <Typography>Components</Typography>
          </Link>
          <Link href="/docs/getting-started">
            <Typography>Docs</Typography>
          </Link>
          <Link
            href="https://www.npmjs.com/package/secptrum-ui"
            target="_blank"
          >
            <Typography>NPM</Typography>
            <RiArrowRightUpLine />
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
          <GoBell size={20} color={theme.colors?.icon} className="not" />
          <Icon
            icon={light ? IoMdMoon : MdSunny}
            size={22}
            className="not"
            color={theme.colors?.icon}
            onClick={toggleTheme}
          />
        </Links>
      </LinkWrapper>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div.withConfig({
  shouldForwardProp: (props) => props !== "light",
})<{ light: boolean }>`
  background: ${(props) =>
    props.light ? "rgb(255,255,255,0.5)" : "rgb(0,0,0,0.5)"};
  display: flex;
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 4px 6px;
  z-index: 100;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(6px);
  border-bottom: 1px solid
    ${(props) => (props.light ? colors.neutral300 : "rgb(38 38 38)")};

  .logo {
    flex-grow: 0.5;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
  }
`;

const Logo = styled(Media)`
  width: 50px;
  height: 50px;
`;

const LinkWrapper = styled(Box)`
  justify-content: space-between;
  width: 35%;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 820px) {
    gap: 2rem;
    width: 55%;
  }
  @media screen and (max-width: 768px) {
    gap: 2rem;
    width: 65%;
  }
`;

const Links = styled(Box)`
  gap: 2.2rem;
  align-items: center;

  .not {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors?.text};
    display: flex;
    align-items: center;

    &:hover {
      color: ${colors.blue500};
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
